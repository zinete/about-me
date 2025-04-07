// 项目经历数据
const projectExperiences = [
  {
    name: 'Lawwit 律师工作平台',
    url: 'https://www.law-wit.com',
    urlText: 'https://www.law-wit.com',
    status: '已上线',
    description: 'Lawwit 是一款面向律师行业的 SaaS 软件。作为核心开发者之一，我负责使用 React + TypeScript 技术栈进行前端开发，实现了案件管理、智能文档协作、客户关系管理等核心功能模块。项目采用微前端架构，使用 Redux 进行状态管理，实现了复杂的表单处理和数据流转。针对律师业务特点，开发了智能文档生成系统，支持多人实时协作编辑。同时优化了系统性能，提升了大量数据下的渲染效率，使用 React Query 优化了数据请求策略。'
  },
  {
    name: '紫砂之家',
    url: 'https://apps.apple.com/cn/app/id1306689169',
    urlText: 'http://www.zisha.com',
    status: '已上线',
    description: '紫砂之家App是万宝艺术品旗下一款专业电商App。作为该项目核心开发者，我主导了项目基础框架的搭建以及2.0版本的全面升级，采用React Native跨平台技术实现iOS和Android双端一致体验。技术上使用Redux管理复杂的异步数据流，采用JWT确保前后端分离架构下的API安全。项目亮点包括基于阿里云推流SDK的直播功能，使用RTMP协议搭建了企业级直播平台，支持高并发观看和互动。同时封装了20+通用UI组件和工具函数库，提升了团队开发效率30%以上。目前该项目稳定运行，已迭代14个版本，日活跃用户800+。'
  },
  {
    name: '茶物几何',
    url: 'http://www.chawujihe.com/',
    urlText: 'http://www.chawujihe.com',
    status: '已上线',
    description: '茶物几何是一款集茶品交易、社区互动于一体的综合性App。作为核心开发者，我负责实现了直播、IM即时通讯、第三方支付集成和热更新服务等关键功能模块。技术上采用React Native开发，实现了一套代码同时支持iOS和Android平台。项目中我重构了原有架构，引入Redux进行状态管理，采用MVC设计模式规范代码组织，并建立了完善的项目文档体系。通过CodePush实现了应用热更新，大幅提升了迭代效率和用户体验。凭借在项目中的突出表现，获得了公司"优秀新人"称号。'
  },
];

// 渲染项目经历的函数
function renderProjectExperience() {
  const container = document.getElementById('project-experience');

  const projectHTML = projectExperiences.map(project => `
    <div class="content">
      <p class="skill">
        ${project.name} | 项目地址:
        <a href="${project.url}" target="_blank">${project.urlText}</a>
      ${project.status}
      </p>
      <p class="project">
        ${project.description}
      </p>
    </div>
  `).join('');

  container.innerHTML = projectHTML;
}

// 页面加载完成后渲染项目经历
document.addEventListener('DOMContentLoaded', renderProjectExperience);