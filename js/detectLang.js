//var userLang = navigator.language || navigator.userLanguage;
//var userLang = window.navigator.userLanguage || window.navigator.language;
//alert ("The language is: " + userLang);
//console.log(userLang);
//if (userLang === 'de') {
//  window.location.href = "/";
//} else {
  //  window.location.href = "en.html";
//}
var acceptLanguage = 'Accept-Language: en;q=0.8,es;q=0.6,fr;q=0.4';

var languages = acceptLanguage.split(':')[1].match(/[a-zA-Z\-]{2,10}/g) || [];
console.log(languages); // ['en', 'es', 'fr']


//if (getFirstBrowserLanguage() === 'de') {
    //window.location.href = "/";
//} else {
    //window.location.href = "en.html";
//}
