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

// This is a module. The globalThis export is used. The globalThis export can also be used with variables.

import * as vars_CDNQuerierEngine from "./vars_CDNQuerierEngine.js";

// Lo scopo di questa funzione è quello di interrogare l'url specificato e, se la risposta è valida, chiamare la funzione callback con la risposta come parametro. La funzione non sarà pubblica "globalThis.queryCDN = queryCDN;" per questioni di sicurezza.
function queryCDN(url, callback) {
  return new Promise((resolve, reject) => {
    // Query the CDN at the given URL. Expect the URL to point to a JSON file.
    // When the query is complete, call the callback function with the JSON
    // object as the argument.
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            callback(data);

            resolve();
        }
    };
    xhr.send();  
  });
}

var labels_states_map = null;

// Compiles the "labels_states_map" variable
function queryCDN_map_labels_states() {
  return new Promise(async (resolve, reject) => {
    if (labels_states_map != null || labels_states_map != undefined) {
      // Querying the CDN is not necessary
      resolve();
    }
  
    var url = vars_CDNQuerierEngine.glob_cdnProfile_map_labels_states;
  
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

// labels_states
var labels_states = null;

// Compiles the "labels_states" variable
function queryCDN_labels_states() {
  return new Promise(async (resolve, reject) => {
    if (labels_states != null || labels_states != undefined) {
      // Querying the CDN is not necessary
      resolve();
    }
  
    var url = vars_CDNQuerierEngine.glob_cdnProfile_labels_states;
  
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

// Map the "labels_states" variable to the "labels_states_map" variable
function mapStateToHTMLContent_labels(state) {
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
  
  var elms = document.querySelectorAll(`[id=${id}]`);

  // Iterate over the elements with the given "id"
  for (var i = 0; i < elms.length; i++) {
    // Inject the "htmlContent" beforebegin the "<div></div>" element. The "<div></div>" will remain empty, but that's not a problem.
    elms[i].insertAdjacentHTML('beforebegin', htmlContent);
  }
}

async function selfsustainable_fill_labels_state(id) {
  await queryCDN_map_labels_states();
  await queryCDN_labels_states();
  fill_labels_state(id);
}
globalThis.selfsustainable_fill_labels_state = selfsustainable_fill_labels_state;
