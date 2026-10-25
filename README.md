# 408大观园 · 计算机考研公益知识库

> 一个专题，一网打尽；公益共享，查漏补缺。
> 风格致敬 B 站 [@澄潇宇](https://space.bilibili.com/6536560) 的「大观园」公益资料。

纯静态站点，无框架、无构建、无后端，数据全部来自公开网络（B站 / GitHub / 知乎 / CSDN / 抖音 / MOOC，2026-10 收集）。

## 功能

- **四大观**：数据结构 / 组成原理 / 操作系统 / 计算机网络，26 章逐章整理考频、考点、题型与配套资源链接
- **智能刷题**（`quiz.html`）：280 道真题例题按章节组织，即答即判、解析随出、正确率统计
- **真题套卷**（`quiz.html#/papers`）：2009–2026 按年份开卷；带年份标签的题进入对应年份卷，收录逐年补全
- **题目导入**：总览页「导入题目」可粘贴 JSON 数组灌入完整历年真题（存 localStorage，与内置题库合并，参与套卷/章节/错题本），格式见面板内说明
- **错题本**（`cuoti.html`）：答错自动归档，错题重刷答对自动移出，支持手动移除
- **章节复习状态**：未启 / 修习中 / 已勘熟，localStorage 本地保存
- **资源宝库**（`resources.html`）：网课殿堂 / 开源宝库 / 书目经典 / 经验长廊 / 大观园家族，支持平台筛选与搜索
- **多级路由**：哈希路由（`#/ds`、`#/ds/ch2`、`#/quiz/ds/ch0`、`#/wrong`），GitHub Pages 项目页与本地 `file://` 均可直接运行

## 本地运行

双击 `index.html` 即可；或起一个静态服务器：

```bash
python -m http.server 8471
# 打开 http://127.0.0.1:8471
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，把本目录全部文件推上去（保持目录结构）：

   ```bash
   git init
   git add -A
   git commit -m "408大观园"
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```

2. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 之后每次 `git push` 到 main，`.github/workflows/pages.yml` 会自动发布。
4. 访问 `https://<你的用户名>.github.io/<仓库名>/`。

> 站点全部使用相对路径 + 哈希路由，放在仓库子路径（`/<repo>/`）下无需任何配置改动。

## 目录结构

```
408-daguanyuan/
├── index.html          # 首页
├── subject.html        # 四大观（多级路由 #/ds、#/ds/ch2）
├── quiz.html           # 智能刷题（#/、#/ds、#/ds/ch0、#/wrong）
├── cuoti.html          # 错题本
├── resources.html      # 资源宝库
├── css/style.css       # 园林式样式（含深色模式）
├── js/
│   ├── data.js         # 科目章节 / 试卷结构 / 路线 / 资源数据
│   ├── questions-*.js  # 四科题库（280题，按科目拆分，可持续扩充）
│   └── main.js         # 主题切换 + 哈希路由 + 答题/错题本存取
└── .github/workflows/pages.yml  # Pages 自动部署
```

## 扩充题库

在 `js/questions-*.js` 里按现有格式追加即可：

```js
QUIZ_BANK.push({ id:'ds1-9', s:'ds', c:1, y:'2020', q:'题干',
  o:['选项A','选项B','选项C','选项D'], a:1, e:'解析' });
```

`y` 填真题年份或 `经典`；`a` 为正确选项下标（0 起）。站点相关统计自动更新。

## 免责声明

题目据公开回忆版整理、个别为贴近考点的改编，以历年真题原件为准；所有链接资源版权归原作者所有，仅供学习交流，侵删。
