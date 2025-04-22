const workExperiences = [
  {
    period: '2022.11 - 至今',
    company: '上海律舟科技有限公司',
    position: '高级前端工程师',
    responsibilities: [
      '负责法律SaaS产品前端功能设计与开发，使用React + TypeScript + Antd + Tailwind CSS技术栈',
      '负责人事合同、案件、服务中心, 大模型接入、律所官网定制化开发...',
      '优化前端性能，实现复杂表单交互和大数据渲染，提升用户体验和系统响应速度',
      '参与产品需求分析和技术方案设计，推动前后端协作与技术创新'
    ]
  },
  {
    period: '2021.5 - 2022.10',
    company: '上海飞蓬网络科技有限公司',
    position: '区块链前端工程师',
    responsibilities: [
      '负责区块链浏览器、DApp和官网等产品开发，采用Nuxt.js + Tailwind CSS实现跨平台兼容',
      '深入研究Web3生态，实现DeFi和NFT项目的智能合约交互与前端数据可视化',
      '构建前端自动化部署流程，提升团队开发效率和产品迭代速度'
    ]
  },
  {
    period: '2019.1 - 2021.5',
    company: '上海紫砂实业有限公司',
    position: '移动端开发工程师',
    responsibilities: [
      '主导茶物几何App从0到1的开发，负责React Native架构设计与核心功能实现',
      '攻克直播、支付、热更新等技术难点，确保产品稳定性和用户体验',
      '负责App发布与审核流程，解决iOS/Android平台兼容性问题，保障版本迭代顺利进行'
    ]
  },
  {
    period: '2018.4 - 2018.12',
    company: '上海嗨核网络科技有限公司',
    position: '前端开发工程师',
    responsibilities: [
      '负责币嗨App核心功能模块开发，实现跨平台一致性体验',
      '优化移动端适配方案，使用响应式设计确保在各种设备上的最佳显示效果',
      '开发高转化率的H5活动页面，提升用户参与度和留存率'
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


