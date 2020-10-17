// Listen for messages

console.log("content shit ran")

if(document.getElementById("productTitle")){
    console.log(document.getElementById("productTitle").innerHTML)
    console.log(document.getElementById("price_inside_buybox").innerHTML)
}



document.addEventListener('click', function(e) {
    var reason = ""
    retval = null;
    if (e.target.matches('#add-to-cart-button') || e.target.matches('#buy-now-button')) {
        reason = prompt('Why are you purchasing this product?');
    }
    if (reason){
        retval = {
            title: document.getElementById("productTitle").innerHTML,
            price: document.getElementById("price_inside_buybox").innerHTML,
            reason: reason 
        }
    }
    return retval
});

console.log(retval)

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});