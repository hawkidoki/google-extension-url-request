console.log('popup.js');

// onLoad popup
document.addEventListener("DOMContentLoaded", function(){
    
    // send message to: background.js
    // pullData
    chrome.runtime.sendMessage({action: "pullData"});
    
});

// listen message from: background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse){
    
    // pushData
    if(message.action === "pushData"){

        // found urls
        if(message.data.length){
            
            // popup title
            document.write('<h2>'+ message.data.length +' URL FOUND</h2>');
            document.write('<hr />');
            
            // loop urls
            message.data.map(function(url, i){
                document.write(i+1 + ': ' + truncateString(url, 50) + '<br />');
            });
        
        // no url found
        }else{
            document.write('<h2>NO URL FOUND.</h2>');
        }

    }
    
});

function truncateString(str, maxLength){ 
    if(str.length > maxLength){
        return str.substring(0, maxLength - 3) + '...'; 
    } 
    return str; 
} 