/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//                                                             //
//                                                             //
// Andrea Grandieri andreagrandieri.github.io                  //
// Copiloted by Copilot@GitHub                                 //
//                                                             //
//                                                             //
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// FARE CHIAREZZA TRA FUNZIONI PUBBLICHE E FUNZIONI PRIVATE! LO STESSO PER LE VARIABILI GLOBALI!

// This is a module. The globalThis export is used. The globalThis export can also be used with variables.

// Global variables
// All in the code below, if "availableLanguagesArray" being null or undefined is not checked, it is because it is guaranteed it will exist (assumed YAML variables are being used correctly!!! Bad management of YAML variables is not handled)
var availableLanguagesArray = null;
var disambiguationLang = null;

// Dizionario di mapping tra le lingue e le sigle utilizzate per indicarle
var mappingDictionaryForLanguages = {
  "en": "English",
  "it": "Italiano"
}

// Function to go the same page with a different language
function changeLanguage(currentLanguage, newLanguage) {
  // Surround the currentLanguage with "/"
  currentLanguage = "/" + currentLanguage + "/";

  // Surround the newLanguage with "/"
  newLanguage = "/" + newLanguage + "/";

  // currentLanguage is in the following format: "/langauge/"
  // newLanguage is in the following format: "/language/"
  // In the current web page URL replace the current language with the new one
  // This reloads the page with the new URL
  window.location.href = window.location.href.replace(currentLanguage, newLanguage);
}
globalThis.changeLanguage = changeLanguage;

function antiDisambigURL(toAppend) {
  // Get the current URL and append "toAppend" to it. Then set this new URL as the current URL
  window.location.href = window.location.href + toAppend;
}

// We should have access to the variable "availableLanguagesArray"
function compileDropdownLanguageChoicer() {
  // The "availableLanguagesArray" is an array containing the languages available for the current page. With these languages (that are strings) compile the elements of the dropdown menu with id: "dropdownLanguageChoicer".
  var toInject = "";

  for (var i = 0; i < availableLanguagesArray.length; i++) {
    var currentLanguage = availableLanguagesArray[0];

    // Highlight the current language
      if (i == 0) {
        // // toInject += `<a class="active" href='javascript:changeLanguage("${currentLanguage}", "${availableLanguagesArray[i]}");'>` + mappingDictionaryForLanguages[availableLanguagesArray[i]] + "</a>";

        toInject += `<li class="nav-list-item"><a class="nav-list-link active" href='javascript:changeLanguage("${currentLanguage}", "${availableLanguagesArray[i]}");'>` + mappingDictionaryForLanguages[availableLanguagesArray[i]] + "</a></li>";

        continue;
      }

      // Check if availableLanguagesArray[i] is not null or undefined
      if (availableLanguagesArray[i]) {
        // // toInject += `<a href='javascript:changeLanguage("${currentLanguage}", "${availableLanguagesArray[i]}");'>` + mappingDictionaryForLanguages[availableLanguagesArray[i]] + "</a>";

        toInject += `<li class="nav-list-item "><a class="nav-list-link" href='javascript:changeLanguage("${currentLanguage}", "${availableLanguagesArray[i]}");'>` + mappingDictionaryForLanguages[availableLanguagesArray[i]] + "</a></li>";
      }
  }

  document.getElementById("dropdown-content").innerHTML = toInject;
}
globalThis.compileDropdownLanguageChoicer = compileDropdownLanguageChoicer;

function assignVariable_availableLanguagesArray(content) {
  availableLanguagesArray = content;
}
globalThis.assignVariable_availableLanguagesArray = assignVariable_availableLanguagesArray;

function assignVariable_disambiguationLang(content) {
  disambiguationLang = content;
}
globalThis.assignVariable_disambiguationLang = assignVariable_disambiguationLang;

function handleDisambiguationPage() {
  // A disambiguation page is detected if it is not placed in a language directory. These pages SHOULD REALLY BE disambiguation pages, that is pages that are bare and should redirect to the correct page with a well-defined language. The language should be deduced by previous well-defined language pages; if a deduction is not possible, fallback to a default language.

  // Now disambiguation lang should be set
  antiDisambigURL(disambiguationLang + "/");
}
globalThis.handleDisambiguationPage = handleDisambiguationPage;

function isDisambiguationPage() {
  // Test the URL of the page to check if it is a disambiguation page: it is a disambiguation page if "/language/" is not present in the URL, with "language" iterating over the keys of the "mappingDictionaryForLanguages" object
  for (var key in mappingDictionaryForLanguages) {
    if (window.location.href.indexOf("/" + key + "/") > -1) {
      return false;
    }
  }

  return true;
}
globalThis.isDisambiguationPage = isDisambiguationPage;

function syncLanguage() {
 // Checks if the "sessionStorage" object is supported by the browser
 if (typeof (Storage) !== "undefined") {
  if (sessionStorage.lang == null || sessionStorage.lang == undefined) {
    handleDisambiguationPage();
  }
  else {
    if (disambiguationPageTestCompatibility()) {
      // Vai alla pagina corretta in base all'ultimo linguaggio usato
      antiDisambigURL(sessionStorage.lang + "/");
    } else {
      handleDisambiguationPage();
    }
  }
} else {
  if (syncLanguage.lang == null || syncLanguage.lang == undefined) {
    handleDisambiguationPage();
  } else {
    if (disambiguationPageTestCompatibility()) {
      // Vai alla pagina corretta in base all'ultimo linguaggio usato
      antiDisambigURL(syncLanguage.lang + "/");
    } else {
      handleDisambiguationPage();
    }
  }
}
}
globalThis.syncLanguage = syncLanguage;

function setLastUsedLanguage() {
  // Checks if the "sessionStorage" object is supported by the browser
  if (typeof (Storage) !== "undefined") {
    sessionStorage.lang = availableLanguagesArray[0];
  } else {
    syncLanguage.lang = availableLanguagesArray[0];
  }
}
globalThis.setLastUsedLanguage = setLastUsedLanguage;

function disambiguationPageTestCompatibility() {
  // Check if "availableLanguagesArray" is null or undefined
  if (availableLanguagesArray == null || availableLanguagesArray == undefined) {
    return false;
  }

  // Checks if the "sessionStorage" object is supported by the browser
  if (typeof (Storage) !== "undefined") {
    // Check that "sessionStorage.lang" is in the array "availableLanguagesArray"
    if (availableLanguagesArray.indexOf(sessionStorage.lang) > -1) {
      // The language is supported
      return true;
    } else {
      // The language is not supported
      return false;
    }
  } else {
    // Check that "syncLanguage.lang" is in the array "availableLanguagesArray"
    if (availableLanguagesArray.indexOf(syncLanguage.lang) > -1) {
      // The language is supported
      return true;
    } else {
      // The language is not supported
      return false;
    }
  }
}
globalThis.disambiguationPageTestCompatibility = disambiguationPageTestCompatibility;
