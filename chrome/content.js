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

var retval = null;

document.addEventListener('click', function(e) {
    var reason = "";
    if (e.target.matches('#add-to-cart-button') || e.target.matches('#buy-now-button')) {
        reason = prompt('Why are you purchasing this product?');
    }
    if (reason) {
        retval = {
            title: document.getElementById("productTitle").innerHTML,
            price: document.getElementById("price_inside_buybox").innerHTML,
            reason: reason 
        }
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

console.log(retval);

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});