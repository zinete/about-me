const workExperiences = [
  {
    period: '2022.11 - 2025.12',
    company: '上海律舟科技有限公司',
    position: '前端开发工程师',
    responsibilities: [
      '主导法律SaaS 前端架构与组件化建设（React + TypeScript），推动模块化与复用，缩短交付周期。',
      '负责关键业务模块（人事合同、案件管理、服务中心、案件支付）等关键模块开发，提升产品可用性与扩展性。',
      '通过性能分析与渲染优化，降低首屏渲染时间并提升用户操作流畅度。',
      '参与产品与技术方案设计，推动前后端协作与研发规范落地。'
    ]
  },
  {
    period: '2020.7 - 2022.10',
    company: '上海飞蓬信息科技有限公司',
    position: '运维开发工程师',
    responsibilities: [
      '负责公司 Web管理系统前端开发，使用 Vue / React 构建后台管理系统。参与系统部署工作，配置 Nginx反向代理及HTTPS证书。',
      '负责公司 Linux服务器日常运维管理，包括系统部署、服务配置、系统升级及安全策略维护。',
      '负责 Web服务环境搭建，部署 Nginx、Node.js、PM2 等运行环境，为公司业务系统提供稳定运行环境。',
      '使用 Docker容器化部署应用服务，统一开发与生产环境，提高部署效率。',
      '负责项目上线发布流程，通过 Git + 自动化脚本 实现项目快速部署与回滚。',
      '定期执行 服务器及数据库备份策略，确保系统数据安全。'
    ]
  },
  {
    period: '2018.4 - 2020.6',
    company: '上海紫砂实业有限公司',
    position: '软件工程师',
    responsibilities: [
      '负责公司内部信息管理系统的开发与维护，使用 JavaScript、HTML、CSS 等技术构建用户界面，提升系统的用户体验和功能性。',
      '参与开发公司电商App项目、使用 React Native 构建跨平台移动应用，提供优质的用户体验，并实现与后端服务的高效数据交互。',
      '参与系统需求分析与设计，协助团队制定技术方案，确保项目按时交付并满足业务需求。',
      '负责系统的性能优化和安全加固，定期进行代码审查和系统测试，提升系统的稳定性和安全性。',
      '与团队成员紧密合作，解决开发过程中遇到的技术问题，并持续改进开发流程和工具使用。'
    ]
  },
  {
    period: '2017.11 - 2018.3',
    company: '传智播客（武汉中心）',
    position: '网络管理员',
    responsibilities: [
      '负责公司 局域网（LAN）及无线网络（WIFI）环境管理，维护交换机、路由器、防火墙等网络设备。',
      '管理公司 IT设备资产，包括电脑、打印机、网络设备等硬件设备。',
      '负责2个校区内员工电脑以及学生网络出现问题的排查与解决，确保网络环境稳定运行。',
      '维护企业Windows Server 2012 R2域环境，管理用户账户、权限设置及资源共享，确保网络安全与访问控制。',
      '处理其他行政事务，如办公用品采购、门锁、吸顶灯维修、出差老师办理入住等事务，支持公司日常运营。'
    ]
  },
  {
    period: '2017.3 - 2017.11',
    company: '千里马招标网（武汉分公司）',
    position: '网络管理员',
    responsibilities: [
      '负责解决公司员工电脑网络问题，维护公司局域网（LAN）环境，确保网络稳定运行。',
      '负责公司 IT设备资产管理，包括电脑、打印机等硬件设备的维护与管理。',
      '负责公司新办公地点的网络环境搭建与配置，负责和外部人员对接完成公司呼叫中心搭建',
      '协助公司新员工电脑配置、邮件、钉钉等账户的开通与维护，确保员工能够顺利使用公司网络资源。',
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


