//var userLang = navigator.language || navigator.userLanguage;
var userLang = window.navigator.userLanguage || window.navigator.language;
//alert ("The language is: " + userLang);
console.log(userLang);
if (userLang === 'de') {
  window.location.href = "/";
} else {
    window.location.href = "en.html";
}
