// /api/progress —— 刷题进度云同步（备份 / 恢复）
// action=save: {pin, data, device?}  → 新建或更新备份，新建时返回设备码
// action=load: {pin, device}         → 校验 PIN 后返回备份数据
// 防护：中间件限流、载荷上限、字段校验、PIN 只存哈希、设备码为随机不可枚举

const MAX_PAYLOAD = 600 * 1024; // 600KB
const CODE_ALPHABET = '23456789abcdefghjkmnpqrstuvwxyz'; // 去掉易混淆字符

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

async function hashPin(device, pin) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`408dgy:${device}:${pin}`));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function genDeviceCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return [...bytes].map(b => CODE_ALPHABET[b % CODE_ALPHABET.length]).join('');
}

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!env.PROGRESS_KV) return json({ ok: false, error: '存储未配置' }, 500);
  // 限流由 _middleware.js 统一执行

  let body;
  try { body = await request.json(); } catch (e) {
    return json({ ok: false, error: '请求体不是合法 JSON' }, 400);
  }
  const action = body.action;

  // ---------- 备份 ----------
  if (action === 'save') {
    const pin = String(body.pin || '');
    if (!/^\d{4,8}$/.test(pin)) return json({ ok: false, error: 'PIN 需为 4~8 位数字' }, 400);

    let data = body.data;
    if (data == null || typeof data !== 'object') return json({ ok: false, error: '缺少 data' }, 400);
    const payload = JSON.stringify(data);
    if (payload.length > MAX_PAYLOAD) return json({ ok: false, error: '数据太大（>600KB）' }, 413);

    let device = String(body.device || '');
    if (device) {
      if (!/^[2-9a-z]{8}$/.test(device)) return json({ ok: false, error: '设备码格式不正确' }, 400);
      const old = await env.PROGRESS_KV.get('p:' + device);
      if (old) {
        const rec = JSON.parse(old);
        if (rec.p !== await hashPin(device, pin)) {
          return json({ ok: false, error: '该设备码已存在且 PIN 不匹配' }, 403);
        }
      }
    } else {
      // 新建设备码（极小概率撞码，重试几次）
      for (let i = 0; i < 5; i++) {
        device = genDeviceCode();
        if (!(await env.PROGRESS_KV.get('p:' + device))) break;
        device = '';
      }
      if (!device) return json({ ok: false, error: '生成设备码失败，请重试' }, 500);
    }

    const pinHash = await hashPin(device, pin);
    await env.PROGRESS_KV.put('p:' + device, JSON.stringify({ p: pinHash, d: data, t: Date.now() }));
    return json({ ok: true, device, savedAt: Date.now() });
  }

  // ---------- 恢复 ----------
  if (action === 'load') {
    const pin = String(body.pin || '');
    const device = String(body.device || '');
    if (!/^\d{4,8}$/.test(pin)) return json({ ok: false, error: 'PIN 格式不正确' }, 400);
    if (!/^[2-9a-z]{8}$/.test(device)) return json({ ok: false, error: '设备码格式不正确' }, 400);

    const raw = await env.PROGRESS_KV.get('p:' + device);
    if (!raw) return json({ ok: false, error: '设备码不存在' }, 404);
    const rec = JSON.parse(raw);
    if (rec.p !== await hashPin(device, pin)) {
      return json({ ok: false, error: 'PIN 不正确' }, 403);
    }
    return json({ ok: true, device, data: rec.d, savedAt: rec.t });
  }

  return json({ ok: false, error: '未知 action' }, 400);
}

export async function onRequestGet() {
  return json({ ok: true, service: '408-daguanyuan progress api' });
}
