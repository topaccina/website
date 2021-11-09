var userLang = navigator.language || navigator.userLanguage;
//alert ("The language is: " + userLang);
console.log(userLang);
if (userLang === 'de') {
  window.location.href = "/";
} else {
    window.location.href = "en.html";
}
