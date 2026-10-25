/* ============================================================
 * 408大观园 · 数据层
 * 资源信息收集自 B站 / GitHub / 知乎 / CSDN / 抖音 等公开网络（2026-10）
 * 仅作学习交流之导航索引，版权归原作者所有
 * ============================================================ */

const SUBJECTS = {
  ds: {
    key: 'ds',
    name: '数据结构',
    seal: '数据大观',
    full: '数据结构大观',
    color: '#2f6f4f',
    weight: '45分',
    intro: '408 的第一座山，也是算法思维的根基。选择题考概念辨析，大题考算法设计与手写代码。会画算法运行的流程图，也就会做题了。',
    courses: [
      { n: '王道计算机考研 数据结构', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站', extra: '3130万播放 · 官方全程班' },
      { n: '王道2027版数据结构习题讲解', u: 'https://www.bilibili.com/video/BV1h6r5YTEQ7', p: 'B站', extra: '784万播放 · 配套习题' },
      { n: '复旦发哥带学408 · 王道课本数据结构带学', u: 'https://www.bilibili.com/video/BV1SiDYBeET5', p: 'B站', extra: '82万播放 · 逐页带学' },
      { n: '启航 刘财政 408精讲精练·数据结构', u: 'https://www.bilibili.com/video/BV1ZmMe62EVs', p: 'B站', extra: '官方配套课程' }
    ],
    chapters: [
      {
        t: '第一章 绪论', freq: '低', type: '选择题',
        pts: ['数据结构基本概念', '逻辑结构 vs 存储结构', '算法与时间/空间复杂度分析'],
        res: [{ n: '算法复杂度速查（CS-Notes）', u: 'https://github.com/CyC2018/CS-Notes', p: 'GitHub' }]
      },
      {
        t: '第二章 线性表', freq: '高', type: '选择 + 大题',
        pts: ['顺序表与链表的插入删除', '双链表 / 循环链表', '静态链表', '线性表算法设计题（反转、去重、合并）'],
        res: [
          { n: '王道数据结构全程班', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站' },
          { n: 'Data-Structres 图解仓库', u: 'https://github.com/callmePicacho/Data-Structres', p: 'GitHub' }
        ]
      },
      {
        t: '第三章 栈、队列和数组', freq: '高', type: '选择 + 大题',
        pts: ['出入栈序列合法性（卡特兰数）', '循环队列判满判空', '共享栈 / 双端队列', '中缀转后缀、表达式求值', '特殊矩阵压缩存储下标计算', '栈和队列的算法设计题'],
        res: [{ n: '王道数据结构全程班', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站' }]
      },
      {
        t: '第四章 串', freq: '中', type: '选择题',
        pts: ['朴素模式匹配', 'KMP：next 数组与 nextval 手算', 'KMP 时间复杂度 O(m+n)'],
        res: [{ n: '王道数据结构全程班', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站' }]
      },
      {
        t: '第五章 树与二叉树', freq: '高', type: '选择 + 大题',
        pts: ['二叉树性质与遍历（前中后/层序互相推导）', '线索二叉树', '树与森林的转换、哈夫曼树与编码', '并查集', '二叉排序树 / 平衡树（AVL 旋转）', 'B 树与 B+ 树'],
        res: [
          { n: '王道数据结构全程班', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站' },
          { n: '一图展示堆的调整插入删除（澄潇宇大观园博文）', u: 'https://blog.csdn.net/moonnight_bit', p: 'CSDN' }
        ]
      },
      {
        t: '第六章 图', freq: '高', type: '选择 + 大题',
        pts: ['邻接矩阵 / 邻接表', 'DFS / BFS 及其应用', '最小生成树（Prim / Kruskal）', '最短路径（Dijkstra / Floyd 手算）', '拓扑排序与关键路径 AOE 网'],
        res: [{ n: '王道数据结构全程班', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站' }]
      },
      {
        t: '第七章 查找', freq: '中', type: '选择 + 大题',
        pts: ['折半查找判定树与 ASL', '散列表：冲突处理与查找成功/失败 ASL 手算', '散列函数构造'],
        res: [{ n: '王道数据结构全程班', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站' }]
      },
      {
        t: '第八章 排序', freq: '高', type: '选择 + 大题',
        pts: ['八大排序的过程、比较次数与稳定性', '快排/堆排的手动模拟', '基数排序', '外部排序与败者树、最佳归并树'],
        res: [{ n: '王道数据结构全程班', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站' }]
      }
    ]
  },

  co: {
    key: 'co',
    name: '计算机组成原理',
    seal: '组成大观',
    full: '计算机组成原理大观',
    color: '#8a4b2d',
    weight: '45分',
    intro: '公认最硬的一科：内容又多又繁琐又难。但计组难而有章可循，以做题为导向，硬着头皮跟住王道视频啃下来，后面三科都会轻松。',
    courses: [
      { n: '王道计算机考研 计算机组成原理', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站', extra: '1870万播放 · 官方全程班' },
      { n: '湖科大教书匠 · 计算机组成原理微课堂', u: 'https://www.bilibili.com/video/BV1qG41197E4', p: 'B站', extra: '326万播放 · 动画精良' },
      { n: '老汤讲408 · 计算机组成原理', u: 'https://www.bilibili.com/video/BV1G29JYQE8b', p: 'B站', extra: '141万播放' },
      { n: '中国大学MOOC · 计算机系统基础（袁春风）', u: 'https://search.bilibili.com/all?keyword=%E8%A2%81%E6%98%A5%E9%A3%8E%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80', p: 'MOOC', extra: '南大 · 硬件视角理解C语言' }
    ],
    chapters: [
      {
        t: '第一章 计算机系统概述', freq: '低', type: '选择题',
        pts: ['冯·诺依曼结构与五大部件', '层次结构、编译与解释', '性能指标（CPI、MIPS、主频）'],
        res: [{ n: '王道组成原理全程班', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站' }]
      },
      {
        t: '第二章 数据的表示和运算', freq: '高', type: '选择 + 大题',
        pts: ['原码/反码/补码/移码与真值换算', '补码加减、溢出判断', '原码/补码乘除法手动模拟', 'IEEE 754 浮点数', '浮点加减的规格化', 'C 语言中的类型转换与截断'],
        res: [{ n: '王道组成原理全程班', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站' }]
      },
      {
        t: '第三章 存储系统', freq: '高', type: '选择 + 大题',
        pts: ['主存芯片与CPU连接（位扩展/字扩展）', 'SRAM vs DRAM、刷新', 'Cache 映射：直接/全相联/组相联与命中率计算', 'Cache 写策略', '多体并行存储器（低位交叉编址常考大题）', '虚拟存储器、页式存储'],
        res: [{ n: '王道组成原理全程班', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站' }]
      },
      {
        t: '第四章 指令系统', freq: '中', type: '选择 + 大题',
        pts: ['一地址/二地址/三地址指令格式设计', '扩展操作码', '寻址方式（立即/直接/间接/变址/基址/相对）', 'CISC vs RISC', 'x86 / MIPS 汇编题'],
        res: [{ n: '王道组成原理全程班', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站' }]
      },
      {
        t: '第五章 中央处理器', freq: '高', type: '选择 + 大题',
        pts: ['取指译码执行的数据通路', '微程序控制器 vs 硬布线', '指令流水线：五段流水、数据/结构/控制冒险、转发与气泡', '流水线吞吐率/加速比计算'],
        res: [{ n: '王道组成原理全程班', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站' }]
      },
      {
        t: '第六章 总线', freq: '中', type: '选择题',
        pts: ['总线分类与结构', '总线仲裁（集中/分布）', '同步 vs 异步定时', '总线带宽计算'],
        res: [{ n: '王道组成原理全程班', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站' }]
      },
      {
        t: '第七章 输入/输出系统', freq: '高', type: '选择 + 大题',
        pts: ['程序查询 / 中断 / DMA 三种方式对比（常考大题）', '中断处理过程与中断屏蔽字', '多重中断与中断隐指令', 'DMA 与 CPU 争夺主存的方案'],
        res: [{ n: '王道组成原理全程班', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站' }]
      }
    ]
  },

  os: {
    key: 'os',
    name: '操作系统',
    seal: '系统大观',
    full: '操作系统大观',
    color: '#4a5a8a',
    weight: '35分',
    intro: '学完计组再学操作系统，会有理解上的升华。这门不算难，掌握原理基本就会做题；知识点琐碎，配合小林coding图解系统整理表格效果拔群。',
    courses: [
      { n: '王道计算机考研 操作系统', u: 'https://www.bilibili.com/video/BV1YE411D7nH', p: 'B站', extra: '2450万播放 · 官方全程班' },
      { n: '王道2027版操作系统习题讲解', u: 'https://www.bilibili.com/video/BV1NjExzVEtH', p: 'B站', extra: '437万播放' },
      { n: '小林coding · 图解系统', u: 'https://xiaolincoding.com/os/', p: '网站', extra: '图解 + 对比表格，查漏补缺利器' }
    ],
    chapters: [
      {
        t: '第一章 操作系统概述', freq: '低', type: '选择题',
        pts: ['OS 的功能与特征（并发/共享/虚拟/异步）', '中断与异常、系统调用', '内核态与用户态切换', 'OS 发展历程（批处理→分时→实时）'],
        res: [{ n: '王道操作系统全程班', u: 'https://www.bilibili.com/video/BV1YE411D7nH', p: 'B站' }]
      },
      {
        t: '第二章 进程与线程', freq: '高', type: '选择 + 大题',
        pts: ['进程状态转换图（五状态）', 'PCB、进程 vs 线程', '调度算法（FCFS/SJF/HRRN/RR/多级反馈队列）手算周转时间', '进程同步：互斥、信号量机制 PV 操作（生产者消费者/读者写者/哲学家），PV 大题必考', '死锁：必要条件、银行家算法、死锁检测与解除'],
        res: [
          { n: '王道操作系统全程班', u: 'https://www.bilibili.com/video/BV1YE411D7nH', p: 'B站' },
          { n: '图解系统 · 进程篇', u: 'https://xiaolincoding.com/os/', p: '网站' }
        ]
      },
      {
        t: '第三章 内存管理', freq: '高', type: '选择 + 大题',
        pts: ['动态分区分配算法（首次/最佳/最坏适应）', '分页存储：页表、地址变换（快表 TLB）', '两级/多级页表', '分段与段页式', '虚拟内存、请求分页：OPT/FIFO/LRU/Clock 置换算法手算（大题常客）', '抖动与工作集'],
        res: [{ n: '王道操作系统全程班', u: 'https://www.bilibili.com/video/BV1YE411D7nH', p: 'B站' }]
      },
      {
        t: '第四章 文件管理', freq: '中', type: '选择 + 大题',
        pts: ['文件逻辑结构与 FCB、索引结点 inode', '连续/链接/索引分配（混合索引计算常考大题）', '目录管理（硬链接 vs 软链接）', '位示图与成组链接法管理磁盘空间', '磁盘调度算法（SSTF/SCAN/C-SCAN）手算'],
        res: [{ n: '王道操作系统全程班', u: 'https://www.bilibili.com/video/BV1YE411D7nH', p: 'B站' }]
      },
      {
        t: '第五章 输入/输出管理', freq: '中', type: '选择 + 大题',
        pts: ['I/O 控制方式（与计组联动）', 'I/O 软件层次结构', 'SPOOLing 技术', '设备分配与缓冲区（单/双/循环缓冲计算）'],
        res: [{ n: '王道操作系统全程班', u: 'https://www.bilibili.com/video/BV1YE411D7nH', p: 'B站' }]
      }
    ]
  },

  cn: {
    key: 'cn',
    name: '计算机网络',
    seal: '网络大观',
    full: '计算机网络大观',
    color: '#7a6a2f',
    weight: '25分',
    intro: '分值最低但最好拿分的一科：题目偏记忆，知识点星罗棋布。跟着湖科大教书匠的动画学一遍，理解轻松；再拿小林coding图解网络查漏补缺。',
    courses: [
      { n: '湖科大教书匠 · 计算机网络微课堂', u: 'https://www.bilibili.com/video/BV1c4411d7jb', p: 'B站', extra: '897万播放 · 动画天花板' },
      { n: '王道计算机考研 计算机网络', u: 'https://www.bilibili.com/video/BV19E411D78Q', p: 'B站', extra: '1930万播放 · 官方全程班' },
      { n: '湖科大 · 408计算机网络强化复习', u: 'https://www.bilibili.com/video/BV1XHs3zPEuW', p: 'B站', extra: '45万播放 · 冲刺向' },
      { n: '小林coding · 图解网络', u: 'https://xiaolincoding.com/network/', p: '网站', extra: 'TCP/IP 深度图解' }
    ],
    chapters: [
      {
        t: '第一章 计算机网络体系结构', freq: '中', type: '选择题',
        pts: ['OSI 七层 vs TCP/IP 四层 vs 五层', '各层功能、协议与设备对应', '时延计算（发送/传播/排队）', '协议三要素：语法、语义、同步'],
        res: [{ n: '湖科大计算机网络微课堂', u: 'https://www.bilibili.com/video/BV1c4411d7jb', p: 'B站' }]
      },
      {
        t: '第二章 物理层', freq: '低', type: '选择题',
        pts: ['奈奎斯特定理与香农定理计算（必考计算题）', '编码方式（NRZ/曼彻斯特/差分曼彻斯特）', '调制与复用（FDM/TDM/WDM/CDMA）', '宽带接入技术'],
        res: [{ n: '湖科大计算机网络微课堂', u: 'https://www.bilibili.com/video/BV1c4411d7jb', p: 'B站' }]
      },
      {
        t: '第三章 数据链路层', freq: '中', type: '选择 + 大题',
        pts: ['封装成帧与透明传输', '差错检测：CRC 循环冗余校验手算（大题常客）', '流量控制与滑动窗口、停止-等待/后退N帧/选择重传', 'CSMA/CD 最小帧长与争用期', 'MAC 地址、ARP、交换机自学习', 'VLAN'],
        res: [{ n: '湖科大计算机网络微课堂', u: 'https://www.bilibili.com/video/BV1c4411d7jb', p: 'B站' }]
      },
      {
        t: '第四章 网络层', freq: '高', type: '选择 + 大题',
        pts: ['IPv4 分组格式', 'IP 地址与子网划分、CIDR 聚合、子网掩码计算（每年必考）', '路由协议 RIP / OSPF / BGP 对比', 'ARP / ICMP / IGMP', 'NAT 与路由表转发（最长前缀匹配大题）', 'IPv6 与隧道技术', 'SDN 与路由算法'],
        res: [{ n: '湖科大计算机网络微课堂', u: 'https://www.bilibili.com/video/BV1c4411d7jb', p: 'B站' }]
      },
      {
        t: '第五章 传输层', freq: '高', type: '选择 + 大题',
        pts: ['UDP vs TCP 首部格式', 'TCP 三次握手与四次挥手（状态机必考）', 'TCP 可靠传输：序号确认、超时重传 RTT 计算', 'TCP 流量控制与滑动窗口', 'TCP 拥塞控制：慢启动/拥塞避免/快重传/快恢复 手算窗口变化（大题必考）'],
        res: [
          { n: '湖科大计算机网络微课堂', u: 'https://www.bilibili.com/video/BV1c4411d7jb', p: 'B站' },
          { n: '图解网络 · TCP 篇', u: 'https://xiaolincoding.com/network/', p: '网站' }
        ]
      },
      {
        t: '第六章 应用层', freq: '中', type: '选择 + 大题',
        pts: ['C/S 模型 vs P2P 模型', 'DNS 域名解析过程（迭代/递归）', 'FTP / SMTP / POP3 / IMAP', 'HTTP 报文格式、持久连接与非持久连接计算', '电子邮件收发全流程', 'CDN 与万维网'],
        res: [{ n: '湖科大计算机网络微课堂', u: 'https://www.bilibili.com/video/BV1c4411d7jb', p: 'B站' }]
      }
    ]
  }
};

/* ---------- 试卷结构 ---------- */
const EXAM_STRUCTURE = {
  total: '150分 · 180分钟',
  items: [
    { s: '数据结构', w: '45分（30%）', n: '线性表、树、图、查找、排序' },
    { s: '计算机组成原理', w: '45分（30%）', n: '存储系统、CPU、指令、I/O' },
    { s: '操作系统', w: '35分（23%）', n: '进程、内存、文件、I/O' },
    { s: '计算机网络', w: '25分（17%）', n: '体系结构、链路、网络、传输' }
  ],
  questionTypes: [
    { t: '单项选择题', d: '40题 × 2分 = 80分，覆盖四科，重概念辨析与手算' },
    { t: '综合应用题', d: '7题 × 10分 ≈ 70分，数据结构算法设计、计组流水线/Cache、OS 的 PV 与置换、计网的子网划分与拥塞控制' }
  ]
};

/* ---------- 复习路线 ---------- */
const ROADMAP = [
  {
    phase: '基础轮（3月–6月）', tag: '地毯式过一遍',
    pts: ['零基础先补 C 语言（翁恺 MOOC / B站搜索「翁恺 C语言」），数据结构离不开写代码', '跟王道四门单科视频，搭配王道书，学一章做一章选择题', '计组最难，别恋战也别跳；计网可用湖科大替换王道', '建立 OneNote/Notion 笔记骨架，只记错题与对比表格']
  },
  {
    phase: '强化轮（7月–9月）', tag: '刷题 + 大题专项',
    pts: ['二刷王道选择题错题，启用刷题本（ddy/cs-408 仓库有现成的）', '按题型分类攻克大题通解：IO 大题、低位交叉编址、主存映射、PV 操作、页面置换、子网划分、拥塞控制窗口', '留意历年真题考频统计（cs-408 仓库「6其他资源」目录），高频考点优先吃透', '数据结构开始每周手写 2–3 道算法大题']
  },
  {
    phase: '冲刺轮（10月–考前）', tag: '真题为王',
    pts: ['最迟10月中旬开真题：2009–2026 共 18 套，至少留 50 天', '真题选择题多为往年复现，务必逐题搞懂；推荐图领真题逐题精讲（B站）', '冷门考点考前粗略浏览即可，别为一分冷门耗一天', '考前两周停新题，只翻自己整理的笔记与背诵知识点，把自己的笔记当王道书复盘']
  }
];

/* ---------- 全站资源导航 ---------- */
const RESOURCES = {
  courses: {
    title: '网课殿堂',
    desc: 'B站免费全流程网课，从零基础到真题冲刺，播放量即口碑。',
    items: [
      { n: '王道数据结构全程班', u: 'https://www.bilibili.com/video/BV1b7411N798', p: 'B站', d: '王道计算机教育官方，3130万播放，408标配' },
      { n: '王道组成原理全程班', u: 'https://www.bilibili.com/video/BV1ps4y1d73V', p: 'B站', d: '1870万播放，咸鱼学长主讲' },
      { n: '王道操作系统全程班', u: 'https://www.bilibili.com/video/BV1YE411D7nH', p: 'B站', d: '2450万播放' },
      { n: '王道计算机网络全程班', u: 'https://www.bilibili.com/video/BV19E411D78Q', p: 'B站', d: '1930万播放' },
      { n: '王道2027数据结构习题讲解', u: 'https://www.bilibili.com/video/BV1h6r5YTEQ7', p: 'B站', d: '784万播放，配套王道书课后题' },
      { n: '王道2027操作系统习题讲解', u: 'https://www.bilibili.com/video/BV1NjExzVEtH', p: 'B站', d: '437万播放' },
      { n: '王道2027计算机网络习题讲解', u: 'https://www.bilibili.com/video/BV1FdetzEEVA', p: 'B站', d: '210万播放' },
      { n: '湖科大教书匠·计算机网络微课堂', u: 'https://www.bilibili.com/video/BV1c4411d7jb', p: 'B站', d: '897万播放，动画最好的计网课' },
      { n: '湖科大·深入浅出计算机网络', u: 'https://www.bilibili.com/video/BV1NT411g7n6', p: 'B站', d: '305万播放，配套同名教材' },
      { n: '湖科大·计组微课堂', u: 'https://www.bilibili.com/video/BV1qG41197E4', p: 'B站', d: '326万播放' },
      { n: '老汤讲408·计算机组成原理', u: 'https://www.bilibili.com/video/BV1G29JYQE8b', p: 'B站', d: '141万播放，27/28考研向' },
      { n: '复旦发哥·王道数据结构带学', u: 'https://www.bilibili.com/video/BV1SiDYBeET5', p: 'B站', d: '82万播放，逐页带学课本' },
      { n: '启航·刘财政408精讲精练（数据结构）', u: 'https://www.bilibili.com/video/BV1ZmMe62EVs', p: 'B站', d: '启航官方配套课程' },
      { n: '图领·09-26年真题逐题精讲（已完结）', u: 'https://www.bilibili.com/video/BV1icaxz8EXN', p: 'B站', d: '408万播放，冲刺期刷真题神器' },
      { n: '请叫我AXin·408攻略（140分学长）', u: 'https://www.bilibili.com/video/BV16W4y1z71H', p: 'B站', d: '45万播放，五轮复习法' },
      { n: '可爱分子1009·锐评王道四本书', u: 'https://www.bilibili.com/video/BV17gPezJEJJ', p: 'B站', d: '408专业135分的四本书优缺点' },
      { n: '翁恺·程序设计入门 C语言（中国大学MOOC）', u: 'https://www.icourse163.org/course/ZJU-1001541001', p: 'MOOC', d: '浙大翁恺，跨考补C语言首选' },
      { n: '袁春风·计算机系统基础（B站搜索）', u: 'https://search.bilibili.com/all?keyword=%E8%A2%81%E6%98%A5%E9%A3%8E%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80', p: 'B站', d: '南大，从硬件层面理解C语言执行' },
      { n: '王卓·数据结构（B站搜索）', u: 'https://search.bilibili.com/all?keyword=%E7%8E%8B%E5%8D%93%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84', p: 'B站', d: '小红书高分帖公认的数据结构基础详解首选' },
      { n: '沈悦408·操作系统与全科题型（B站搜索）', u: 'https://search.bilibili.com/all?keyword=%E6%B2%88%E6%82%A6408', p: 'B站', d: 'OS 应试速成与题型技巧，两篇千藏听课帖都在推' },
      { n: '里昂408·真题与考点串联（B站搜索）', u: 'https://search.bilibili.com/all?keyword=%E9%87%8C%E6%98%82408', p: 'B站', d: '选择题精讲与大题套路，知乎经验帖+小红书双重推荐' }
    ]
  },
  repos: {
    title: '开源宝库',
    desc: 'GitHub 上的 408 兵工厂：笔记、刷题本、真题、考频统计，全免费。',
    items: [
      { n: 'ddy-ddy/cs-408', u: 'https://github.com/ddy-ddy/cs-408', p: 'GitHub', d: '★6.3k · 四科OneNote笔记 + 王道书/刷题本PDF + 历年真题考频统计 + 复习心得' },
      { n: 'CodePanda66/CSPostgraduate-408', u: 'https://github.com/CodePanda66/CSPostgraduate-408', p: 'GitHub', d: '★5.7k · 408专业课资料及真题资源' },
      { n: 'xiaolei565/aimto408', u: 'https://github.com/xiaolei565/aimto408', p: 'GitHub', d: '★4.6k · 死磕408的资源合集，含大纲变化解读' },
      { n: 'lanlankaoyanshan/408Bester', u: 'https://github.com/lanlankaoyanshan/408Bester', p: 'GitHub', d: '★1.5k · 蓝蓝考研：月度规划 + 各科攻略 + 无水印历年真题 + 自命题真题汇总' },
      { n: 'cen6667/408', u: 'https://github.com/cen6667/408', p: 'GitHub', d: '★1k · 四科课程笔记（非考研向也适用）' },
      { n: 'Noob-Dream/cskaoyan', u: 'https://github.com/Noob-Dream/cskaoyan', p: 'GitHub', d: '★621 · 择校、科目、大纲一站式' },
      { n: 'youngflysky/KaoYanZhenTi-PDF', u: 'https://github.com/youngflysky/KaoYanZhenTi-PDF', p: 'GitHub', d: '★610 · 408真题+考研数学英语真题PDF' },
      { n: 'nnngu/Postgraduate-408-old-exam', u: 'https://github.com/nnngu/Postgraduate-408-old-exam', p: 'GitHub', d: '★374 · 408历年真题' },
      { n: 'LYuYang61/408', u: 'https://github.com/LYuYang61/408', p: 'GitHub', d: '★225 · 持续更新中的408笔记' },
      { n: 'CyC2018/CS-Notes', u: 'https://github.com/CyC2018/CS-Notes', p: 'GitHub', d: '★180k+ · 算法与四科基础知识的经典仓库' }
    ]
  },
  books: {
    title: '书目经典',
    desc: '市面公认的主流通行组合：王道为主，天勤/袁春风为辅。',
    items: [
      { n: '王道四件套（复习指导）', p: '书籍', d: '数据结构/组成/OS/计网四本，408事实标准，配合官方B站课食用' },
      { n: '天勤系列（数据结构分册尤佳）', p: '书籍', d: '讲解更口语化，数据结构代码题风格友好，可作王道替代' },
      { n: '袁春风《计算机系统基础》', p: '书籍', d: '南大教材，从硬件理解软件，计组薄弱者的外挂' },
      { n: '《深入浅出计算机网络》', p: '书籍', d: '湖科大教书匠团队出品，配套其B站微课' },
      { n: '《算法笔记》', p: '书籍', d: '跨考者数据结构/算法题救急，配晴神宝典' },
      { n: '王道选择题刷题本 / 大题刷题本', p: '资料', d: 'cs-408 仓库有 2023/2024 两年电子版可直接取用' }
    ]
  },
  exp: {
    title: '经验长廊',
    desc: '知乎高分经验帖共识：王道为主流，真题为王，笔记自建。',
    items: [
      { n: '计算机考研408专业课130+经验分享', u: 'https://zhuanlan.zhihu.com/p/413239856', p: '知乎', d: '试卷结构 + 分科打法' },
      { n: '408 135分经验贴：关于408你想知道的都在这', u: 'https://zhuanlan.zhihu.com/p/1896196608644863091', p: '知乎', d: '教辅与网课的取舍' },
      { n: '25考研一战408·131分复习经验', u: 'https://zhuanlan.zhihu.com/p/30081738365', p: '知乎', d: '推荐袁春风计算机系统基础补硬件视角' },
      { n: '3个月速成408经验分享', u: 'https://zhuanlan.zhihu.com/p/707186565', p: '知乎', d: '晚启动玩家的极限操作：湖科大+真题' },
      { n: '26考研408择校、复习规划大分享（2万字）', u: 'https://zhuanlan.zhihu.com/p/18700855220', p: '知乎', d: '科班跨考通用的全网最全攻略之一' },
      { n: '25考研408全网最全复习指导（含数英政）', u: 'https://zhuanlan.zhihu.com/p/704137482', p: '知乎', d: '全科视角排兵布阵' },
      { n: '23跨考经验贴·408篇', u: 'https://zhuanlan.zhihu.com/p/597608139', p: '知乎', d: '零基础：翁恺C语言 + 算法笔记起步' },
      { n: '2023广东工业大学408经验帖（总分373）', u: 'https://zhuanlan.zhihu.com/p/624334776', p: '知乎', d: '双非上岸样本' },
      { n: '085404考研经验（澄潇宇大观园博客）', u: 'https://blog.csdn.net/moonnight_bit/article/details/156277921', p: 'CSDN', d: '「408不难，难在内容之多、周期之长」+ 题型通解法' },
      { n: '408计算机考研攻略·140分学长（视频）', u: 'https://www.bilibili.com/video/BV16W4y1z71H', p: 'B站', d: '五轮复习法 + 时间线' }
    ]
  },
  xhs: {
    title: '小红书精选',
    desc: '经你授权登录站内检索并逐篇阅读筛出（2026-10），按互动量排序；笔记链接含时效参数，失效时可在小红书 App 内搜同名标题。',
    items: [
      { n: '小破站听课顺序（408考研）', u: 'https://www.xiaohongshu.com/search_result/6aa8c1b80000000028034f32?xsec_token=ABr3uPbAiPyOypdl2Pf4t4j--JE0PwV4aGB686Xapp2hk=&xsec_source=pc_search', p: '小红书', d: '@7. · 赞1029 藏1179 · 每科「基础→题型→专项」完整听课链条：数构王卓+沈悦+哈喜，计组湖科大+袁春风+beokayy，OS沈悦+木子(PV)，计网湖科大+半幺郎' },
      { n: '个人认为408考研讲课很好的几个老师', u: 'https://www.xiaohongshu.com/search_result/6a27d893000000001503f505?xsec_token=AB5uYVOWC4sxfRJKTjcYZxEbfmOUG4MKtC3hQCfQe0E9M=&xsec_source=pc_search', p: '小红书', d: '@w · 赞824 藏1127 · 分科老师测评：王道/沈悦（系统）、王卓/蓝不过海呀（数构）、湖科大/bok（计组）、李哥考研（PV专项）、里昂408（真题选择）' },
      { n: '大三开始408考研，毫无头绪的直接参考我', u: 'https://www.xiaohongshu.com/search_result/6ac33dca0000000014003cab?xsec_token=ABcNi0o2rmXv2ceSidzRcc-Zywj_TAC9rH9_NmaLCDdU0=&xsec_source=pc_search', p: '小红书', d: '@阿柚 · 赞427 藏572 · 25考研11408总分402上岸：「早开始不等于每天死学，是给自己留出试错时间」，附公共课+专业课全年规划' },
      { n: '408考研建议看这几个老师，真的能速通', u: 'https://www.xiaohongshu.com/search_result/69b92725000000001a034771?xsec_token=AB_cw_qiCyojlKn7zsGUXXqFGd3myaydHjD9m3VJp8YJA=&xsec_source=pc_search', p: '小红书', d: '@·灿 · 赞171 藏180 · 时间紧的速通向老师清单' },
      { n: '408王道b站网课看完之后建议看什么', u: 'https://www.xiaohongshu.com/search_result/673433f4000000001901818a?xsec_token=AB4hY8037SB47KQHe_EcvYhm8MfhUS4z3M8bL8wWNyQBU=&xsec_source=pc_search', p: '小红书', d: '@人生是睡觉 · 赞147 藏133 评52 · 基础课之后的强化衔接：王道强化课 vs 湖科大等，评论区讨论很细' },
      { n: '这篇写给时间不够的考研人看（408）', u: 'https://www.xiaohongshu.com/search_result/6adcaa18000000002c032432?xsec_token=ABVk0jcXoFrSg40fUhevF8uAjE_g-9vTbxwLZ0ISdFO2Y=&xsec_source=pc_search', p: '小红书', d: '@哈哈 · 赞55 藏47 · 考前两月别放弃：面面俱到不现实，抓大放小才是上上策' },
      { n: '26考研408分｜考研冲刺期经验帖', u: 'https://www.xiaohongshu.com/search_result/6ad5ff4d000000003100a906?xsec_token=ABgQdr8ofWxxMhUoka4Ngx_H5VTAVukdX6EMqOL_4KQjQ=&xsec_source=pc_search', p: '小红书', d: '@快乐小象 · 赞48 藏48 · 11408 冲刺期节奏复盘，评论区可提问' },
      { n: '28考研408计算机全年复习规划', u: 'https://www.xiaohongshu.com/search_result/6ab7ff32000000000200ca78?xsec_token=ABsLFuQ1h_tSyiajzhhGVo6DIg1gHyARTxYeHto0o6WtE=&xsec_source=pc_search', p: '小红书', d: '@爱因斯坦要考研 · 赞28 藏25 · 28考研全年时间线规划图' },
      { n: '过来人忠告：真正的408根本不是xhs上那样', u: 'https://www.xiaohongshu.com/search_result/6a6db120000000002701d90e?xsec_token=ABPd7uL2hlEuynGTQJfyfGObsQ_nHbDfrOojQ2X7KT7vA=&xsec_source=pc_search', p: '小红书', d: '@哈哈 · 反焦虑清醒帖：满屏130+是幸存者偏差；干货：数构重点章2/3/5/6/7/8，伪代码逻辑对就能拿分' },
      { n: '22408双非一战399经验贴——心态篇', u: 'https://www.xiaohongshu.com/search_result/6ab7c778000000001801a9f7?xsec_token=ABsLFuQ1h_tSyiajzhhGVo6AT4vNkshE-d2Msp5qNz1l0=&xsec_source=pc_search', p: '小红书', d: '@君弈 · 双非一战399上岸（复旦）的心态管理：想清楚为什么考、番茄TODO锁机、主动清除信息流干扰' }
    ]
  },

  daguan: {
    title: '大观园家族',
    desc: '澄潇宇（帕拉迪宇）的公益「大观」宇宙：一个专题一网打尽，本站的灵感来源。',
    items: [
      { n: '澄潇宇 B站主页', u: 'https://space.bilibili.com/6536560', p: 'B站', d: '「你考研最强的辅助系」，大观系列与直播都在这' },
      { n: '考研政治一页纸（三小时速成选择）', u: 'https://www.bilibili.com/video/BV1YxmWBzEYL', p: 'B站', d: '127万播放，一页纸哲学的代表作' },
      { n: '级数大观（0基础直通级数满分）', u: 'https://www.bilibili.com/video/BV1THN36xE41', p: 'B站', d: '95万播放，数学大观系列' },
      { n: '微分方程大观', u: 'https://www.bilibili.com/video/BV1CpM8ztEaX', p: 'B站', d: '106万播放' },
      { n: '线面积分大观', u: 'https://www.bilibili.com/video/BV1YPak6pEct', p: 'B站', d: '40万播放' },
      { n: '澄潇宇大观园 · CSDN博客', u: 'https://blog.csdn.net/moonnight_bit', p: 'CSDN', d: '考研经验与408复习总线连载' },
      { n: '408真题系统（408os.cn）', u: 'https://www.408os.cn/guide', p: '网站', d: '按章节整理真题的智能备考平台' },
      { n: '抖音·帕拉迪宇大观园', u: 'https://www.douyin.com/shipin/7632529073281206312', p: '抖音', d: '大观园资料介绍与查漏补缺用法' }
    ]
  },
  tools: {
    title: '官方阵地',
    desc: '认准官方渠道，谨防倒卖。',
    items: [
      { n: '王道计算机教育（B站官方号）', u: 'https://space.bilibili.com/255887255', p: 'B站', d: '王道四科官方课程与最新习题讲解' },
      { n: '小林coding', u: 'https://xiaolincoding.com', p: '网站', d: '图解网络 / 图解系统，免费在线，四科查漏补缺' },
      { n: '408全国统考大纲（研招网）', u: 'https://yz.chsi.com.cn', p: '官方', d: '每年9月发布新大纲，注意增删点' }
    ]
  }
};

/* ---------- 真题速览 ---------- */
const PAST_EXAMS = [
  { y: '2009–2015', d: '早期真题，题风与现下略有差异，适合基础轮巩固用' },
  { y: '2016–2021', d: '题风成熟，选择题复现率高，强化轮首选' },
  { y: '2022–2024', d: '大题套路稳定：算法题/流水线/PV/子网划分，冲刺轮掐时间模考' },
  { y: '2025–2026', d: '最新两年，用于考前一周全真模拟，别提前透支' }
];
