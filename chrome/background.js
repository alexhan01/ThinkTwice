// import { isProduct } from './utils/isProduct.js';

let user_signed_in = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'is_user_signed_in') {
        sendResponse({
            message: 'success',
            payload: user_signed_in
        });
    } else if (request.message === 'sign_out') {
        user_signed_in = false;
        sendResponse({ message: 'success' });
    } else if (request.message === 'sign_in') {
        user_signed_in = true;
        sendResponse({ message: 'success' });
    }

    return true;
});

// chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//   chrome.declarativeContent.onPageChanged.addRules([{
//     conditions: [new chrome.declarativeContent.PageStateMatcher({
//       pageUrl: {hostEquals: 'www.amazon.com'},
//     })
//   ],
//     actions: [new chrome.declarativeContent.ShowPageAction()]
//   }]);
// });

// // Regex-pattern to check URLs against. 
// // It matches URLs like: http[s]://[...]stackoverflow.com[...]
// var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?amazon\.com/;

// // A function to use as callback
// function doStuffWithDom(domContent) {
//     console.log('I received the following DOM content:\n' + domContent);
// }

// // When the browser-action button is clicked...
// chrome.tabs.onActivated.addListener(function (tab) {
//     // ...check the URL of the active tab against our pattern and...
//     if (urlRegex.test(tab.url)) {
//         // ...if it matches, send a message specifying a callback too
//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
//     }
// });

// chrome.tabs.onUpdated.addListener(tab => {
//   chrome.tabs.get(tab.tabId, current_tab_info => {
//     if(/^https:\/\/www\.amazon/.test(current_tab_info.url)){
//       //chrome.tabs.insertCSS(null, {file: "styles.css"});
//       chrome.tabs.executeScript(null, {file: "foreground.js"}, () => console.log("I injected"))
//     }
//   });
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if (document.getElementById("productTitle")) {
//     console.log("yay!");
//   }
//   // // console.log(tab.url);
//   //       if (tab.url.includes("amazon")) {
//   //         isProduct(tabId);
//   //       // console.log("Updated");
//   //       // console.log(chrome.windows.location);
//   //     }
// });

// chrome.tabs.onActivated.addListener(tab => {
//   // chrome.tabs.get(tab.tabId);
//   // if (tab.url.contains("amazon")) {
//   //   chrome.tabs.executeScript(null, {file: "foreground.js"}, () => console.log("I injected"))
//   // }
//   // while (true) {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//       if (current_tab_info.url.includes("amazon")) {
//         isProduct();
//         // console.log("New Tab");
//         // console.log(chrome.windows.location);
//       }
//       // console.log(current_tab_info.url);
//       // if(/^https:\/\/www\.amazon/.test(current_tab_info.url)){
//       //   //chrome.tabs.insertCSS(null, {file: "styles.css"});
//       //   chrome.tabs.executeScript(null, {file: "foreground.js"}, () => console.log("I injected"))
//       // }
//     });
//   // }
//   });

// chrome.tabs.onUpdated.addListener(tab => {
//   chrome.tabs.get(tab.tabId);
//   if (tab.url.includes("amazon")) {
//     console.log("Updated");
// }});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   // console.log(tab.url);
//         if (tab.url.includes("amazon")) {
//           isProduct(tabId);
//         // console.log("Updated");
//         // console.log(chrome.windows.location);
//       }
// });

// chrome.runtime.onMessage.addListener((request, sender, sendresponse) => {
//   if (request.message === 'check storage') {
//     chrome.storage.local.get("password", value => (
//       console.log(value)
//     ))
//   }
// })

// function isProduct(tabId) {
//   // var text = document.getElementById("productTitle").innerText;
//   // chrome.pageCapture.saveAsMHTML(tabId);
//   console.log(chrome.pageCapture.saveAsMHTML(tabId, () => null)
//     );
//   // console.log(document.URL);
//   // if (document.querySelector("#productTitle")) {
//   //   // console.log("Hi");
//   // }
// }