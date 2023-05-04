var userLang = navigator.language || navigator.userLanguage;
if (userLang === 'en') {
  window.location.href = '/en.html';
}