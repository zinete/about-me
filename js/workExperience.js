const workExperiences = [
  {
    period: '2022.11 - 2025.12',
    company: '上海律舟科技有限公司',
    position: '高级前端工程师',
    responsibilities: [
      '负责人事管理相关功能优化改造、主要涵盖人员管理、合同管理、名片管理、以及合同模版的设计与开发。其中合同模版采用动态表单形式实现，支持多种字段类型和复杂的逻辑关系，提升了合同生成的灵活性和效率，能够兼容任意位置任意字段的填写配置。',
      '参与客服中心公共案源系统的开发，负责线索渠道配置支持将上传的文档转换为PDF格式的对接与开发，支持多渠道线索的统一管理和分配。完成添加线索复杂表单的设计和开发，支持多种字段类型和动态表单逻辑，提升了线索录入的效率和准确性。',
      '负责案件支付页的开发与维护，通过根据案件来生成一个付款链接，并且动态生成口令来访问案件的敏感信息，支持多平台支付，在PC端通过扫码支付，H5段可以自动跳转到微信或者支付宝支付，提升了支付的便捷性和用户体验。',
      '负责事业合伙人模块的开发。完成事业合伙人报名模块数据的对接，负责流程中合同的签署、归档、签约链接生成、二维码下载等相关功能的开发与维护，支持大型PDF文件等加载，负责对接上上签电子合同平台，完成电子章签署。',
      '负责维护系统的稳定性、修复老旧功能的bug、以及对接第三方系统的接口开发与维护，支持系统的持续优化和升级，提升用户体验和系统性能。'
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


