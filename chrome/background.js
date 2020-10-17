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






chrome.tabs.onUpdated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    console.log(tab.url)
    if(/^https:\/\/www\.amazon/.test(current_tab_info.url)){
      //chrome.tabs.insertCSS(null, {file: "styles.css"});
      chrome.tabs.executeScript(null, {file: "foreground.js"}, () => console.log("I injected"))
    }
  });
});


// chrome.runtime.onMessage.addListener((request, sender, sendresponse) => {
//   if (request.message === 'check storage') {
//     chrome.storage.local.get("password", value => (
//       console.log(value)
//     ))
//   }
// })

