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
function qAnswered(id) { return localStorage.getItem('dgy408:ans:' + id) !== null; }
function qGetAns(id) { const v = localStorage.getItem('dgy408:ans:' + id); return v ? JSON.parse(v) : null; }
function qRecord(id, ok, pick) {
  localStorage.setItem('dgy408:ans:' + id, JSON.stringify({ ok, pick }));
  if (ok) localStorage.removeItem('dgy408:wrong:' + id);
  else localStorage.setItem('dgy408:wrong:' + id, String(Date.now()));
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
