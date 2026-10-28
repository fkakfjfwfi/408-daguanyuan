// 408大观园 · 云同步模块
// 把本机的复习进度/答题记录/错题本/导入题目备份到云端（设备码 + PIN），换设备一键恢复。
// 仅在 Cloudflare 部署版可用（本地/GitHub Pages 打开时 API 不可达会友好提示）。
(function () {
  const PREFIX = 'dgy408:';
  let lastDevice = localStorage.getItem('dgy408:cloud:device') || '';

  function collect() {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX) && !k.startsWith(PREFIX + 'cloud:')) out[k] = localStorage.getItem(k);
    }
    return out;
  }

  function restore(data) {
    let n = 0;
    Object.entries(data || {}).forEach(([k, v]) => {
      if (k.startsWith(PREFIX)) { localStorage.setItem(k, v); n++; }
    });
    return n;
  }

  async function api(payload) {
    const resp = await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const d = await resp.json().catch(() => ({ ok: false, error: '响应解析失败' }));
    if (!resp.ok && !d.error) d.error = 'HTTP ' + resp.status;
    return d;
  }

  // ---------- 弹窗 UI ----------
  function ensureModal() {
    if (document.getElementById('cloudModal')) return;
    const wrap = document.createElement('div');
    wrap.id = 'cloudModal';
    wrap.style.cssText = 'position:fixed;inset:0;z-index:999;display:none;align-items:center;justify-content:center;background:rgba(30,25,15,.45);backdrop-filter:blur(3px)';
    wrap.innerHTML = `
      <div class="cloud-card">
        <div style="display:flex;align-items:center;gap:10px">
          <span class="serif" style="font-weight:900;font-size:19px">☁ 云同步</span>
          <span style="flex:1"></span>
          <button class="btn small" id="cloudClose">✕ 关闭</button>
        </div>
        <p class="cloud-note">备份内容：章节进度、答题记录、错题本、导入题目。凭 <b>设备码 + PIN</b> 在任何设备取回。</p>
        <div class="cloud-tabs">
          <button class="pf-tab on" data-ct="save">备份到云端</button>
          <button class="pf-tab" data-ct="load">恢复到本机</button>
        </div>
        <div id="cloudPaneSave">
          ${lastDevice ? `<p class="cloud-note">当前设备码：<b class="cloud-code">${lastDevice}</b>（更新备份沿用）</p>` : ''}
          <label class="cloud-label">设置 PIN（4~8 位数字）</label>
          <input class="cloud-input" id="cloudSavePin" type="password" placeholder="例如 2026" maxlength="8" inputmode="numeric">
          <button class="btn primary" id="cloudSaveBtn" style="width:100%;margin-top:14px">${lastDevice ? '更新云端备份' : '生成设备码并备份'}</button>
        </div>
        <div id="cloudPaneLoad" style="display:none">
          <label class="cloud-label">设备码</label>
          <input class="cloud-input" id="cloudLoadDev" placeholder="8 位设备码" maxlength="8" autocapitalize="off">
          <label class="cloud-label" style="margin-top:10px">PIN</label>
          <input class="cloud-input" id="cloudLoadPin" type="password" placeholder="备份时设置的 PIN" maxlength="8" inputmode="numeric">
          <button class="btn primary" id="cloudLoadBtn" style="width:100%;margin-top:14px">恢复到本机</button>
        </div>
        <div id="cloudMsg" class="cloud-msg"></div>
      </div>`;
    document.body.appendChild(wrap);
    wrap.addEventListener('click', e => { if (e.target === wrap) close(); });
    document.getElementById('cloudClose').onclick = close;
    wrap.querySelectorAll('[data-ct]').forEach(b => b.onclick = () => {
      wrap.querySelectorAll('[data-ct]').forEach(x => x.classList.toggle('on', x === b));
      document.getElementById('cloudPaneSave').style.display = b.dataset.ct === 'save' ? '' : 'none';
      document.getElementById('cloudPaneLoad').style.display = b.dataset.ct === 'load' ? '' : 'none';
      msg('');
    });
    document.getElementById('cloudSaveBtn').onclick = doSave;
    document.getElementById('cloudLoadBtn').onclick = doLoad;
  }
  function open() { ensureModal(); document.getElementById('cloudModal').style.display = 'flex'; msg(''); }
  function close() { const m = document.getElementById('cloudModal'); if (m) m.style.display = 'none'; }
  function msg(text, ok) {
    const el = document.getElementById('cloudMsg');
    if (!el) return;
    el.textContent = text || '';
    el.style.color = ok ? 'var(--green)' : 'var(--seal)';
  }

  async function doSave() {
    const pin = document.getElementById('cloudSavePin').value.trim();
    if (!/^\d{4,8}$/.test(pin)) return msg('PIN 需为 4~8 位数字');
    const btn = document.getElementById('cloudSaveBtn');
    btn.disabled = true; msg('正在备份…', true);
    try {
      const r = await api({ action: 'save', pin, device: lastDevice || undefined, data: collect() });
      if (!r.ok) { msg('备份失败：' + (r.error || '未知错误')); return; }
      lastDevice = r.device;
      localStorage.setItem('dgy408:cloud:device', r.device);
      document.getElementById('cloudSaveBtn').textContent = '更新云端备份';
      msg(`备份成功！设备码 ${r.device} ——请把设备码和 PIN 一起记好，恢复时两个都要`, true);
    } catch (e) {
      msg('无法连接云服务：' + e.message + '（云同步仅在 Cloudflare 部署版可用）');
    } finally { btn.disabled = false; }
  }

  async function doLoad() {
    const device = document.getElementById('cloudLoadDev').value.trim().toLowerCase();
    const pin = document.getElementById('cloudLoadPin').value.trim();
    if (!/^[2-9a-z]{8}$/.test(device)) return msg('设备码应为 8 位字母数字');
    if (!/^\d{4,8}$/.test(pin)) return msg('PIN 需为 4~8 位数字');
    const btn = document.getElementById('cloudLoadBtn');
    btn.disabled = true; msg('正在恢复…', true);
    try {
      const r = await api({ action: 'load', pin, device });
      if (!r.ok) { msg('恢复失败：' + (r.error || '未知错误')); return; }
      const n = restore(r.data);
      const when = r.savedAt ? new Date(r.savedAt).toLocaleString('zh-CN') : '';
      msg(`恢复成功（${n} 项，备份时间 ${when}），即将刷新页面…`, true);
      setTimeout(() => location.reload(), 1600);
    } catch (e) {
      msg('无法连接云服务：' + e.message + '（云同步仅在 Cloudflare 部署版可用）');
    } finally { btn.disabled = false; }
  }

  // 自动绑定导航栏云朵按钮
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('cloudBtn');
    if (btn) btn.addEventListener('click', open);
  });
  window.cloudOpen = open;
})();
