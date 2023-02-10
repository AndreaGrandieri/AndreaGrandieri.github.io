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

import * as CDNQuerierEngine from "./CDNQuerierEngine.js";
import * as globalShared from "./globalShared.js";
import * as vars_universalBroadcast from "./vars_universalBroadcast.js";

// News are in the following format:
/*
{
    "news": [
        {
            "validityURL": "",
            "birthday": "",
            "TTL": "",
            "callout_level": "",
            "title": "",
            "content": ""
        }
    ]
}
*/

var news = null;

// Query the CDN for news to be broadcasted
async function getNewsFromCDN() {
    try {
        // "queryCDN" uses "JSON.parse" already
        await CDNQuerierEngine.queryCDN(vars_universalBroadcast.news, function (data) {
            news = data;
        });
    } catch (e) {
        // Error. Handling:
        globalShared.toggle_engine_fetching_inErrorState();
        return;
    }
}
globalThis.getNewsFromCDN = getNewsFromCDN;

// Broadcast the news
async function broadcastNews() {
    // First of all, get the news
    try {
        await getNewsFromCDN();

        // Now, "news" contains all the news to be broadcasted.
        // Traverse all the news following the format above
        for (var i = 0; i < news.news.length; i++) {
            // Check the "validityURL" of the news: check if the URL is the base URL of the website.
            // Check if the "validityURL" is a substring of the current URL of the page
            if (window.location.href.includes(news.news[i].validityURL)) {
                console.log("ORIGIIIIIIN");
            }

            // Check the "validityURL" of the news: the news should only be displayed if "validityURL" matches the current URL of the page
            if (news.news[i].validityURL == window.location.href) {
                // Parse the date in "birthday". Example format: "1.Jan.2021"
                var date = new Date(news.news[i].birthday);

                // Add to "date" the "TTL"; the "TTL" is in # of hours
                date.setHours(date.getHours() + news.news[i].TTL);

                // Get the current date
                var currentDate = new Date();

                // Check if "date" falls after "currentDate": if so, the news SHOULD NOT be displayed
                if (date <= currentDate) {
                    // News to be displayed
                    console.log(news.news[i].title);
                    console.log(news.news[i].content);
                }
            }
        }
    } catch (e) {
        // Error. Handling:
        globalShared.toggle_engine_fetching_inErrorState();
        return;
    }
}
globalThis.broadcastNews = broadcastNews;
