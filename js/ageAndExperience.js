/**
 * 动态计算年龄和工作年限
 */

// 出生日期：1996年9月（假设）
const birthDate = new Date(1995, 6, 5); // 月份从0开始，所以8代表9月

// 工作开始日期：2020年2月
const workStartDate = new Date(2020, 1, 5); // 工作开始于2020年2月

function calculateAge() {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // 如果还没到生日，年龄减1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

function calculateWorkExperience() {
  const today = new Date();
  let years = today.getFullYear() - workStartDate.getFullYear();
  const monthDiff = today.getMonth() - workStartDate.getMonth();

  // 如果还没到工作周年纪念日，年数减1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < workStartDate.getDate())) {
    years--;
  }

  return years;
}

// 页面加载时更新
function updateAgeAndExperience() {
  const age = calculateAge();
  const experience = calculateWorkExperience();

  // 更新年龄
  const ageElement = document.getElementById('ageElement');
  if (ageElement) {
    ageElement.textContent = age;
  }

  // 更新工作年限显示（页面上显示为“工作年限：x年”）
  const experienceElement = document.getElementById('experienceElement');
  if (experienceElement) {
    experienceElement.textContent = experience;
  }
}

// DOM加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateAgeAndExperience);
} else {
  updateAgeAndExperience();
}
