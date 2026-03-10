// 项目经历数据
const projectExperiences = [
  {
    name: 'Lawwit 律师工作平台',
    url: 'https://lvzhoutech.com',
    urlText: 'https://lvzhoutech.com',
    status: '',
    description: '法律 SaaS 平台需支持多部门业务（案件、合同、档案）并快速迭代。作为核心前端开发者，负责企业级 UI 体系、复杂表单交互设计、大屏数据可视化与律所官网定制开发。采用 React + TypeScript + Ant Design 构建组件库，基于iframe实现模块隔离，引入 MobX 统一状态管理。大屏数据可视化采用 ECharts 完成数据驱动图表，官网基于 Tailwind CSS 实现响应式设计。日均活跃用户 2000+，支持复杂表单无卡顿运行，新功能上线周期缩短 40%。',
  },
  {
    name: '智能法律咨询助手',
    description: '基于 React + Ant Design X 和 DeepSeek API 开发的智能法律咨询助手，提供实时法律咨询服务。通过集成自然语言处理技术，实现用户输入的法律问题解析和智能回答生成。采用响应式设计确保在不同设备上都有良好的用户体验。项目上线后，日均咨询量达到 500+，用户满意度提升显著，成为律所客户服务的重要工具。',
  },
  {
    name: "盈科律师事务所官网",
    description: "负责盈科律师事务所官网的定制开发与维护，采用 React + Tailwind CSS 实现响应式设计和动态内容展示, 使用 i18n 实现多语言支持，提升全球用户访问体验。通过优化图片资源和引入 CDN 加速，提升页面加载速度，增强用户体验。定期更新内容并修复安全漏洞，确保网站稳定运行和信息安全。完成官网后台管理系统的开发，实现内容管理和数据统计功能，提升运营效率。",
  },
  {
    name: '紫砂之家',
    url: 'https://apps.apple.com/cn/app/id1306689169',
    urlText: 'http://www.zisha.com',
    status: '',
    description: '负责紫砂之家电商 App 双平台一致体验、突破直播与支付瓶颈，日活 800+，GMV 月增 15%。主导框架搭建与 2.0 版本升级，负责直播与支付关键功能模块。使用 React Native 实现双端一致，Redux 管理异步数据流、JWT 安全认证，基于阿里云 SDK + RTMP 构建高并发直播平台，封装 20+ UI 组件库。团队开发效率提升 30%+。',
  },
  {
    name: '茶物几何',
    url: 'http://www.chawujihe.com/',
    urlText: 'http://www.chawujihe.com',
    status: '',
    description: '茶物几何是一款集茶品交易、社区互动于一体的综合性App。作为核心开发者，我负责实现了直播、IM即时通讯、第三方支付集成和热更新服务等关键功能模块。技术上采用React Native开发，实现了一套代码同时支持iOS和Android平台。项目中我重构了原有架构，引入Redux进行状态管理，采用MVC设计模式规范代码组织，并建立了完善的项目文档体系。通过CodePush实现了应用热更新，大幅提升了迭代效率和用户体验。凭借在项目中的突出表现，获得了公司"优秀新人"称号。'
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