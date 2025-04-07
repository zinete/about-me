// 个人项目数据
const personalProjects = [
  {
    name: '基于AI大模型的健康咨询助手',
    url: 'https://net-status.nuxt.dev/fitness/ai-chat',
    urlText: 'https://net-status.nuxt.dev/fitness/ai-chat',
    status: '已上线',
    description: '该项目采用Vue3 + Nuxt.js构建，结合SSR服务端渲染提升首屏加载速度和SEO表现。接入硅基流动大模型API，实现了智能健康问答、个性化健康建议和饮食计划生成等功能。通过Stream流式响应技术，实现了类ChatGPT的打字机效果，大幅提升用户体验。项目还集成了响应式设计，确保在不同设备上都有良好的显示效果。'
  },
  {
    name: '剑桥少儿英语学习平台',
    url: 'https://www.zkepai.com',
    urlText: 'https://www.zkepai.com',
    status: '已上线',
    description: '这是一款基于Node.js后端和UniApp前端开发的跨平台应用，一套代码同时支持H5网页版和微信小程序。项目针对剑桥少儿英语考级特点，设计了智能单词记忆系统，采用艾宾浩斯遗忘曲线算法优化复习计划。实现了音频识别打分功能，可以帮助孩子纠正发音。后台使用MySql存储学习数据，通过数据分析为家长提供学习报告。该平台目前已服务超过500名学生，有效提升了考级通过率。'
  }
];

// 渲染个人项目的函数
function renderPersonalProjects() {
  const container = document.getElementById('personal-projects');

  const projectsHTML = personalProjects.map(project => `
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

  container.innerHTML = projectsHTML;
}

// 页面加载完成后渲染个人项目
document.addEventListener('DOMContentLoaded', renderPersonalProjects);