// Listen for messages

console.log("content shit ran")

if(document.getElementById("productTitle")){
    console.log(document.getElementById("productTitle").innerHTML)
}

document.addEventListener('click', function(e) {
    if (e.target.matches('#add-to-cart-button')) {
        alert('clicked!');
    }
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});