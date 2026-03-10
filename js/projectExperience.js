const projectExperiences = [
  {
    name: 'Lawwit 律师工作平台',
    url: 'https://lvzhoutech.com',
    urlText: 'https://lvzhoutech.com',
    description: '法律 SaaS 平台前端开发（React + Ant Design + Umi.js + MobX + ECharts），覆盖案件、合同、档案等业务。负责核心组件库与复杂动态表单设计，支持条件联动、权限控制及大表单高性能渲染；基于 iframe 实现模块隔离，MobX 管理全局状态；开发数据大屏可视化展示业务趋势与统计数据。系统日活 2000+，新功能迭代周期缩短约 40%。',
  },
  {
    name: '智能法律咨询助手',
    description: '基于 React + Ant Design X + DeepSeek API 开发智能法律咨询助手，实现用户输入法律问题的自然语言解析和智能回答生成。采用响应式设计，跨设备保持良好体验。项目上线后日均咨询量 500+，用户满意度显著提升，成为律所客户服务核心工具。',
  },
  {
    name: "盈科律师事务所官网",
    description: '负责官网定制开发与维护（React + Tailwind CSS + i18n），实现响应式设计、多语言支持和动态内容展示。优化图片资源并接入 CDN，加快页面加载；完成后台管理系统开发，实现内容管理和数据统计。提升全球访问体验和运营效率，确保网站稳定与信息安全。',
  },
  {
    name: '紫砂之家',
    url: 'https://apps.apple.com/cn/app/id1306689169',
    urlText: 'http://www.zisha.com',
    description: '电商 App 前端核心开发（React Native + Redux + 阿里云 SDK + RTMP），实现直播与支付关键功能，突破高并发瓶颈。主导框架搭建及 2.0 版本升级，封装 20+ UI 组件库，团队开发效率提升 30%，日活 800+，GMV 月增 15%。',
  },
  {
    name: '茶物几何',
    url: 'http://www.chawujihe.com/',
    urlText: 'http://www.chawujihe.com',
    description: '综合茶品交易与社区 App 核心开发，使用 React Native + Redux + MVC 架构，实现直播、IM 即时通讯、第三方支付和热更新服务。通过 CodePush 完成应用热更新，提升迭代效率和用户体验。因表现突出获得公司 "优秀新人" 称号。',
  },
];
// 渲染项目经历的函数
function renderProjectExperience() {
  const container = document.getElementById('project-experience');

  const projectHTML = projectExperiences.map(project => `
    <div class="content">
      <p class="skill">
        ${project.name}${project.url ? ` | 项目地址: <a href="${project.url}" target="_blank">${project.urlText}</a>` : ''}${project.status ? ` ${project.status}` : ''}
      </p>
      <p class="project">
        ${project.description}
      </p>
    </div>
  `).join('');
  container.innerHTML = projectHTML;
}

// 页面加载完成后渲
// 染项目经历
document.addEventListener('DOMContentLoaded', renderProjectExperience);