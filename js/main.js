// 408大观园 · 公共脚本：深浅色主题 + 哈希多级路由
// 路由形如 #/subject/ds 、 #/subject/ds/ch2 、 #/quiz/ds/ch0
// 采用 hash 路由：GitHub Pages 项目页与本地 file:// 均可直接运行，无需服务端重写
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('dgy408:theme');
  if (saved === 'dark') root.classList.add('dark');
  const btn = document.getElementById('modeBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('dgy408:theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  }
})();

// 解析当前 hash 路径 → ['subject','ds','ch2']
function routePath() {
  const h = location.hash.replace(/^#\/?/, '');
  return h.split('/').filter(Boolean).map(decodeURIComponent);
}
// 页面内跳转：go('quiz/ds/ch0') → #/quiz/ds/ch0
function go(path) { location.hash = '#/' + path; }
// 注册路由回调：hash 变化与首次进入都会触发
function onRoute(fn) {
  window.addEventListener('hashchange', fn);
  fn();
}
// 答题记录与错题本存取
// 记录结构：{ ok, pick, n:总做次数, w:累计错次, k:连续答对次数, t:最后作答时间 }
// 旧记录只有 {ok,pick}，读取时按一次作答补齐统计（向后兼容）
// 错题移出策略：连续答对 2 次自动移出（防止偶然答对），答错立即归档并累计错次
const WRONG_REMOVED_AT = 2;

function normAns(v) {
  if (!v) return null;
  if (typeof v.n !== 'number') return { ok: !!v.ok, pick: v.pick, n: 1, w: v.ok ? 0 : 1, k: v.ok ? 1 : 0, t: 0 };
  return v;
}
function qAnswered(id) { return localStorage.getItem('dgy408:ans:' + id) !== null; }
function qGetAns(id) { return normAns(qGetAnsRaw(id)); }
function qGetAnsRaw(id) { const v = localStorage.getItem('dgy408:ans:' + id); return v ? JSON.parse(v) : null; }
// 返回 { removed:本次是否移出错题本, willRemoveAt:还需连对几次 }
function qRecord(id, ok, pick) {
  const old = normAns(qGetAnsRaw(id)) || { n: 0, w: 0, k: 0 };
  const k = ok ? (old.k || 0) + 1 : 0;
  localStorage.setItem('dgy408:ans:' + id, JSON.stringify({
    ok, pick, n: (old.n || 0) + 1, w: (old.w || 0) + (ok ? 0 : 1), k, t: Date.now()
  }));
  const wkey = 'dgy408:wrong:' + id;
  if (ok) {
    if (localStorage.getItem(wkey) !== null && k >= WRONG_REMOVED_AT) {
      localStorage.removeItem(wkey);
      return { removed: true, streakLeft: 0 };
    }
    return { removed: false, streakLeft: Math.max(0, WRONG_REMOVED_AT - k) };
  }
  localStorage.setItem(wkey, String(Date.now()));
  return { removed: false, streakLeft: WRONG_REMOVED_AT };
}
function qWrongIds() {
  const ids = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('dgy408:wrong:')) ids.push(k.slice('dgy408:wrong:'.length));
  }
  return ids;
}
function qRemoveWrong(id) { localStorage.removeItem('dgy408:wrong:' + id); }

// 用户导入的自定义题目（如历年真题完整版），存 localStorage，与内置题库合并使用
function customQs() {
  try { return JSON.parse(localStorage.getItem('dgy408:custom') || '[]'); }
  catch (e) { return []; }
}
function customSave(list) { localStorage.setItem('dgy408:custom', JSON.stringify(list)); }
function allQ() { return (window.QUIZ_BANK || []).concat(customQs()); }
