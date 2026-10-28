// 全站中间件：安全响应头 + API 同源校验 + 接口限流
// 限流策略（Pages 配置不支持 ratelimit 绑定，代码实现）：
//   1) 每隔离实例内存 60s 窗口计数（拦截单实例突发）
//   2) 超限时写 KV 封禁标记（60s TTL），全局所有实例共享 → 跨实例封禁
//   3) 每个请求先查 KV 封禁标记（KV 读免费额度充足，写只在滥用时发生）
const WINDOW_MS = 60_000;
const API_LIMIT = 20;
const buckets = new Map(); // ip -> [timestamps]（实例内）

function prunePush(list, now) {
  while (list.length && now - list[0] > WINDOW_MS) list.shift();
  list.push(now);
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  if (url.pathname.startsWith('/api/')) {
    // API 仅接受本站同源调用（阻止第三方站点跨站滥用）
    const origin = request.headers.get('Origin');
    if (origin && origin !== url.origin) {
      return json({ ok: false, error: '跨域请求被拒绝' }, 403);
    }
    if (request.method === 'OPTIONS') return new Response(null, { status: 204 });

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const kv = env.PROGRESS_KV;
    const now = Date.now();

    // 2) 全局封禁标记检查
    if (kv && (await kv.get('blk:' + ip))) {
      return json({ ok: false, error: '请求太频繁，请一分钟后再试' }, 429);
    }

    // 1) 实例内滑动窗口
    let list = buckets.get(ip);
    if (!list) { list = []; buckets.set(ip, list); }
    prunePush(list, now);
    if (list.length > API_LIMIT) {
      // 2) 写全局封禁标记（60 秒自动过期）
      if (kv) context.waitUntil(kv.put('blk:' + ip, '1', { expirationTtl: 60 }).catch(() => {}));
      return json({ ok: false, error: '请求太频繁，请一分钟后再试' }, 429);
    }
    if (buckets.size > 5000) {
      for (const [k, v] of buckets) {
        if (now - v[v.length - 1] > WINDOW_MS) buckets.delete(k);
      }
    }
  }

  const resp = await next();
  const r = new Response(resp.body, resp);
  r.headers.set('X-Frame-Options', 'DENY');
  r.headers.set('X-Content-Type-Options', 'nosniff');
  r.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  r.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  r.headers.set('Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data:; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; base-uri 'self'");
  r.headers.set('X-XSS-Protection', '1; mode=block');
  return r;
}
