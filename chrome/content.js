// Listen for messages

// const { title } = require("process");
// var firebaseConfig = {
//     apiKey: "AIzaSyDecFrJvVcJI-rk7UeiE9KjCrL24MdxqsY",
//     authDomain: "thinktwice-32273.firebaseapp.com",
//     databaseURL: "https://thinktwice-32273.firebaseio.com",
//     projectId: "thinktwice-32273",
//     storageBucket: "thinktwice-32273.appspot.com",
//     messagingSenderId: "478707186318",
//     appId: "1:478707186318:web:180fd830caa0dfd7c167df",
//     measurementId: "G-7K1N2JCKT2"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

console.log("content shit ran")

if(document.getElementById("productTitle")){
    console.log(document.getElementById("productTitle").innerHTML)
    console.log(document.getElementById("price_inside_buybox").innerHTML)
}
chrome.storage.sync.get(["purchases"], function(result) {
    console.log(result)
  });



document.addEventListener('click', function(e) {
    var reason = "";
    if (e.target.matches('#productTitle') || e.target.matches('#buy-now-button')) {
        reason = prompt('Why are you purchasing this product?');
    }
    console.log(reason)
    if (reason != "") {
        var currPurchases = []
        chrome.storage.sync.get(["purchases"], function(result) {
            // console.log(result)
            if (result != null){
                currPurchases = result.purchases
            } else {
                currPurchases = []
            }
          });
          onePurchase = {
            item: document.getElementById("productTitle").innerHTML,
            reason: reason
        }
        // console.log("Before Push")
        // console.log(currPurchases)
        currPurchases.push(onePurchase)
        // console.log("After Push")
        // console.log(currPurchases)
        chrome.storage.sync.set({"purchases": currPurchases}, function() {
            console.log('Value is set to ' + currPurchases);
          });
    }
    reason = "";
 
    // return retval;
    // var dummyUserId = "Hasan";
    // writeUserData(dummyUserId, retval);
});


// function writeUserData(userId, retval) {
//     if (retval != null) {
//         firebase.database().ref(userId).set({
//             title: retval.title,
//             price: retval.price,
//             reason: retval.reason
//         });
//     }
// }


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});