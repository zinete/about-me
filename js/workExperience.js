const workExperiences = [
  {
    period: '2022.11 - 2025.12',
    company: '上海律舟科技有限公司',
    position: '高级前端工程师',
    responsibilities: [
      '主导法律SaaS 前端架构与组件化建设（React + TypeScript），推动模块化与复用，缩短交付周期。',
      '负责关键业务模块（人事合同、案件管理、服务中心、案件支付）等关键模块开发，提升产品可用性与扩展性。',
      '通过性能分析与渲染优化，降低首屏渲染时间并提升用户操作流畅度。',
      '参与产品与技术方案设计，推动前后端协作与研发规范落地。'
    ]
  },
  {
    period: '2021.5 - 2022.10',
    company: '上海飞蓬网络科技有限公司',
    position: '前端工程师',
    responsibilities: [
      '基于 Vue + Node 构建后台管理系统，并开发邮件自动发布模块，实现运营流程自动化，减少人工操作 70%。',
      '参与区块链浏览器与 DApp 前端开发（Nuxt.js），实现链上数据可视化与交互，提升页面渲染性能。',
      '编写智能合约交互组件，确保跨链数据展示稳定准确，支持 DeFi 和 NFT 数据查询。',
      '搭建前端 CI/CD 自动化构建与部署流程，使版本上线周期缩短约 30%，提升团队协作一致性。'
    ]
  },
  {
    period: '2019.1 - 2021.5',
    company: '上海紫砂实业有限公司',
    position: '移动端开发工程师',
    responsibilities: [
      '主导 React Native 移动端从 0 到 1 的开发，负责架构设计与核心功能实现。',
      '解决直播、支付与热更新等关键技术问题，保障线上稳定性与体验。',
      '负责应用上架与跨平台兼容调优，提升用户留存与发布通过率。',
      '负责App内营销活动H5页面开发与维护,通过定制化模版和组件库支持多场景快速迭代，提升活动上线效率和用户转化率。'
    ]
  },
];

function renderWorkExperience() {
  const container = document.getElementById('work-experience');
  const experienceHTML = workExperiences.map(experience => `
    <div class="content">
      <p class="skill">
        ${experience.period} ${experience.company} ${experience.position}
      </p>
      ${experience.responsibilities.map((item, index) => `
        <p>${index + 1}、${item}</p>
      `).join('')}
    </div>
  `).join('');

  container.innerHTML = experienceHTML;
}





// 页面加载完成后渲染工作经历
document.addEventListener('DOMContentLoaded', renderWorkExperience);


