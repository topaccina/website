//var userLang = navigator.language || navigator.userLanguage;
//var userLang = window.navigator.userLanguage || window.navigator.language;
//alert ("The language is: " + userLang);
//console.log(userLang);
//if (userLang === 'de') {
//  window.location.href = "/";
//} else {
  //  window.location.href = "en.html";
//}

var getFirstBrowserLanguage = function () {
    var nav = window.navigator,
    browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
    i,
    language;

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
      for (i = 0; i < nav.languages.length; i++) {
        language = nav.languages[i];
        if (language && language.length) {
          return language;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
      language = nav[browserLanguagePropertyKeys[i]];
      if (language && language.length) {
        return language;
      }
    }

    return null;
  };

console.log(getFirstBrowserLanguage());

if (getFirstBrowserLanguage() === 'de') {
    window.location.href = "/";
} else {
    window.location.href = "en.html";
}
