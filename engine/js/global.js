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
var light_name = "custom_light";
var dark_name = "custom_dark";

var thirdOrderBrowserArray = [];
globalThis.thirdOrderBrowserArray = thirdOrderBrowserArray;

// All in the code below, if "availableLanguagesArray" being null or undefined is not checked, it is because it is guaranteed it will exist (assumed YAML variables are being used correctly!!! Bad management of YAML variables is not handled)
var availableLanguagesArray = null;
var disambiguationLang = null;

// Dizionario di mapping tra le lingue e le sigle utilizzate per indicarle
var mappingDictionaryForLanguages = {
  "en": "English",
  "it": "Italiano"
}

// Function to switch between light and dark mode
// The function should be called within a button
function themeModeSwitcher() {
  // If theme is dark, switch to light
  // If theme is light, switch to dark
  // Default theme is "light"
  // It implements the continuity of the theme between pages, using sessionStorage
  // Fallback is implemented if sessionStorage is not supported by the browser

  // Checks if the "sessionStorage" object is supported by the browser
  if (typeof (Storage) !== "undefined") {
    if (sessionStorage.theme) {
      if (sessionStorage.theme == light_name) {
        toggleDarkMode(true);
      } else {
        toggleLightMode(true);
      }
    } else {
      sessionStorage.theme = light_name;
      toggleDarkMode(true);
    }
  } else {
    // Continuity won't work
    if (themeModeSwitcher.theme !== "undefined") {
      if (themeModeSwitcher.theme == light_name) {
        toggleDarkMode(true);
      } else {
        toggleLightMode(true);
      }
    } else {
      themeModeSwitcher.theme = light_name;
      toggleDarkMode(true);
    }
  }
}
globalThis.themeModeSwitcher = themeModeSwitcher;

function toggleDarkMode(injectFlag) {
  if (injectFlag) {
    // Check if element of id "lightdarkSwitcherButton" exists.
    if (document.getElementById("lightdarkSwitcherButton")) {
      document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-sun fa-3x\"></i>";
    }
  }

  // Checks if the "sessionStorage" object is supported by the browser
  if (typeof (Storage) !== "undefined") {
    sessionStorage.theme = dark_name;
    jtd.setTheme(sessionStorage.theme);
  } else {
    // Continuity won't work
    themeModeSwitcher.theme = dark_name;
    jtd.setTheme(themeModeSwitcher.theme);
  }
}
globalThis.toggleDarkMode = toggleDarkMode;

function toggleLightMode(injectFlag) {
  // Check if element of id "lightdarkSwitcherButton" exists.
  if (document.getElementById("lightdarkSwitcherButton")) {
    if (injectFlag) {
      document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-moon fa-3x\"></i>";
    }
  }

  // Checks if the "sessionStorage" object is supported by the browser
  if (typeof (Storage) !== "undefined") {
    sessionStorage.theme = light_name;
    jtd.setTheme(sessionStorage.theme);
  } else {
    // Continuity won't work
    themeModeSwitcher.theme = light_name;
    jtd.setTheme(themeModeSwitcher.theme);
  }
}
globalThis.toggleLightMode = toggleLightMode;

function retrieveTheme() {
  // Checks if the "sessionStorage" object is supported by the browser
  if (typeof (Storage) !== "undefined") {
    if (sessionStorage.theme) {
      if (sessionStorage.theme == light_name) {
        toggleLightMode(false);
      } else {
        toggleDarkMode(false);
      }
    }
  } else {
    // Continuity won't work
    if (themeModeSwitcher.theme !== "undefined") {
      if (themeModeSwitcher.theme == light_name) {
        toggleLightMode(false);
      } else {
        toggleDarkMode(false);
      }
    }
  }
}
globalThis.retrieveTheme = retrieveTheme;

function appendToThirdOrderBrowserArray(string) {
  thirdOrderBrowserArray.push(string);
}
globalThis.appendToThirdOrderBrowserArray = appendToThirdOrderBrowserArray;

function injectHMTLToThirdOrderBrowserDiv() {
  var toInject = "<li class=\"aux-nav-list-item\"><a href=\"" + thirdOrderBrowserArray[1] + "\"" + "class=\"site-button\"";
  if (thirdOrderBrowserArray[2] == "true") {
    toInject += " target=\"_blank\" rel=\"noopener noreferrer\"";
  }
  toInject += ">" + thirdOrderBrowserArray[0] + "</a></li>";

  document.getElementById("thirdOrderBrowserDiv").innerHTML += toInject;
}
globalThis.injectHMTLToThirdOrderBrowserDiv = injectHMTLToThirdOrderBrowserDiv;

function flushThirdOrderBrowserArray() {
  thirdOrderBrowserArray = [];
}
globalThis.flushThirdOrderBrowserArray = flushThirdOrderBrowserArray;

// It changes the icon of the button to switch between light and dark mode accordingly to the ALREADY retrieved theme
// It should be called after the function "retrieveTheme()"
function syncRetrieveTheme() {
  // Check if element of id "lightdarkSwitcherButton" exists. If not, return. This is probably due to the not inserted button to switch between light and dark mode: in this case, this is not an error
  if (!document.getElementById("lightdarkSwitcherButton")) {
    return;
  }

  // Checks if the "sessionStorage" object is supported by the browser
  if (typeof (Storage) !== "undefined") {
    if (sessionStorage.theme == dark_name) {
      document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-sun fa-3x\"></i>";
    }
    else {
      document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-moon fa-3x\"></i>";
    }
  } else {
    if (themeModeSwitcher.theme == dark_name) {
      document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-sun fa-3x\"></i>";
    } else {
      document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-moon fa-3x\"></i>";
    }
  }
}
globalThis.syncRetrieveTheme = syncRetrieveTheme;

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

// Lo scopo di questa funzione è quello di interrogare l'url specificato e, se la risposta è valida, chiamare la funzione callback con la risposta come parametro. La funzione non sarà pubblica "globalThis.queryCDN = queryCDN;" per questioni di sicurezza.
function queryCDN(url, callback) {
  return new Promise((resolve, reject) => {
    console.log("Querying the CDN at the URL " + url + "...");

    // Query the CDN at the given URL. Expect the URL to point to a JSON file.
    // When the query is complete, call the callback function with the JSON
    // object as the argument.
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.send();  

    resolve();
  });
}

var labels_states_map = null;

// Compiles the "labels_states_map" variable
function queryCDN_map_labels_states() {
  return new Promise(async (resolve, reject) => {
    console.log("Querying the CDN for the labels_states_map.json file...");

    if (labels_states_map != null || labels_states_map != undefined) {
      // Querying the CDN is not necessary
      resolve();
    }
  
    // Hard definition of the URL
    // URL is: "https://raw.githubusercontent.com/AndreaGrandieri/andreagrandieri.github.io/cdn/labels_states_map.json"
    var url = "https://raw.githubusercontent.com/AndreaGrandieri/andreagrandieri.github.io/cdn/labels_states_map.json";
  
    // Callback
    function callback(response) {
      // Save the JSON object in the "labels_states_map" variable; "labels_states_map" should be a dictionary
      labels_states_map = response;
    }
  
    // Query the CDN
    await queryCDN(url, callback); 

    resolve();
  });
}
globalThis.queryCDN_map_labels_states = queryCDN_map_labels_states;

// labels_states
var labels_states = null;

// Compiles the "labels_states" variable
function queryCDN_labels_states() {
  return new Promise(async (resolve, reject) => {
    console.log("queryCDN_labels_states");

    if (labels_states != null || labels_states != undefined) {
      // Querying the CDN is not necessary
      resolve();
    }
  
    // Hard definition of the URL
    // URL is: "https://raw.githubusercontent.com/AndreaGrandieri/andreagrandieri.github.io/cdn/labels_states.json"
    var url = "https://raw.githubusercontent.com/AndreaGrandieri/andreagrandieri.github.io/cdn/labels_states.json";
  
    // Callback
    function callback(response) {
      // Save the JSON object in the "labels_states" variable; "labels_states" should be a dictionary
      labels_states = response;
    }
  
    // Query the CDN
    await queryCDN(url, callback);

    resolve();
  });
}
globalThis.queryCDN_labels_states = queryCDN_labels_states;

// Map the "labels_states" variable to the "labels_states_map" variable
function mapStateToHTMLContent_labels(state) {
  console.log("mapStateToHTMLContent_labels() called");

  // Check if the "labels_states_map" variable is null or undefined
  if (labels_states_map == null || labels_states_map == undefined) {
    // The CDN with the required informations should have alredy been queried. Thus, there's something wrong. Filling won't be performed.
    return;
  }

  // Note the structure of the "labels_states_map" variable:
  /*
  {
    "labels": [
        {
            "state": "",
            "htmlContent": ""
        }
    ]
  }
  */
  
  // Retrive the "htmlContent" from the "labels_states_map" variable based on the "state" parameter
  var htmlContent = labels_states_map.labels.find(function (element) {
    return element.state == state;
  }
  ).htmlContent;

  return htmlContent;
}

// Given the "id" of a "<div></div>", it will inject in that "<div></div>" the corresponding label with its textual content. To be called foreach label with "<script></script>" in the HTML (aka: MD) file.
function fill_labels_state(id) {
  console.log("fill_labels_state() called with id: " + id);

  // Check if the "labels_states_map" variable and the variable "labels_states" is null or undefined
  if (labels_states_map == null || labels_states_map == undefined || labels_states == null || labels_states == undefined) {
    // The CDN with the required informations should have alredy been queried. Thus, there's something wrong. Filling won't be performed.
    return;
  }

  // Note the structure of the "labels_states" variable:
  /*
  {
      "labels": [
          {
              "id": "",
              "description": "",
              "state": "",
              "content": ""
          }
      ]
  }
  */

  // Retrive the "state" from the "labels_states" variable based on the "id" parameter
  var state = labels_states.labels.find(function (element) {
    return element.id == id;
  }
  ).state;

  // Retrive the "htmlContent" from the "labels_states_map" variable based on the "state" parameter
  var htmlContent = mapStateToHTMLContent_labels(state);

  // Retrive the "content" from the "labels_states" variable based on the "id" parameter
  var content = labels_states.labels.find(function (element) {
    return element.id == id;
  }
  ).content;

  // The "htmlContent" is of type: "<p 'some other stuff'></p>": put the "content" inside the "<p 'some other stuff'></p>"
  htmlContent = htmlContent.replace("></p>", ">" + content + "</p>");
  
  document.getElementById(id).innerHTML = htmlContent;
}

async function selfsustainable_fill_labels_state(id) {
  await queryCDN_map_labels_states();
  await queryCDN_labels_states();
  fill_labels_state(id);
}
globalThis.selfsustainable_fill_labels_state = selfsustainable_fill_labels_state;
