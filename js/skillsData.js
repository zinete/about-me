const skillsData = [
  {
    category: '核心基础与语言',
    items: [
      '熟悉 HTML5/CSS3/JavaScript (ES6+)，深入理解原型链、闭包、事件循环及异步编程机制。',
      '熟练掌握 TypeScript，具备大型项目类型定义、泛型设计及重构经验，能有效提升代码健壮性与可维护性。'
    ]
  },
  {
    category: '前端框架与跨端开发',
    items: [
      'React 生态：熟悉 React (Hooks/Fiber) 及其全家桶 (Redux/MobX, React Router)，具备复杂状态管理与高性能组件设计能力。',
      'Vue 生态：熟悉 Vue2/Vue3 及 Nuxt.js SSR 服务端渲染，有后台管理系统及 SEO 优化实战经验。',
      '移动端跨端：深度掌握 React Native 与 UniApp，熟悉 iOS/Android 原生模块交互 (Bridge)、混合开发架构及 App 上架全流程；独立解决过直播推流、热更新 (CodePush) 等关键技术难题。'
    ]
  },
  {
    category: '工程化与性能优化',
    items: [
      '构建工具：了解 Webpack/Vite 配置与优化，擅长通过 Tree Shaking、代码分割、缓存策略等手段提升构建效率。',
      '性能攻坚：具备大数据量渲染（虚拟列表）、首屏加载优化 (FCP/LCP)、内存泄漏排查及长列表流畅滚动等实战经验。',
      'DevOps：熟悉 CI/CD 自动化流程搭建 (PM2 /GitLab CI)，实现从代码提交到自动部署的闭环，提升团队交付效率 30%+。'
    ]
  },
  {
    category: 'AI赋能与效能提升',
    items: [
      '熟悉主流 AI 编程工具（Copilot、Claude、ChatGPT），能高效利用 AI 进行代码生成、问题诊断和文档编写。',
      '建立“人机协作”开发模式，将常规功能开发效率提升 50%+，显著缩短迭代周期。'
    ]
  },
  {
    category: 'Web3 与区块链',
    items: [
      '具备 DeFi/NFT 项目实战经验，熟悉 Solidity 智能合约交互，能独立完成链上数据清洗、解析及可视化展示（ECharts/D3）。'
    ]
  },
];

function renderSkillsContent() {
  const container = document.getElementById('skills-content');
  if (!container) return;

  const skillsHTML = skillsData.map((skill) => `
    <div class="content">
      <p class="skill">${skill.category}</p>
      ${skill.items.map((item, index) => `
        <p>${index + 1}、${item}</p>
      `).join('')}
    </div>
  `).join('');

  container.innerHTML = skillsHTML;
}

document.addEventListener('DOMContentLoaded', renderSkillsContent);
