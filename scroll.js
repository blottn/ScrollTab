/*window.onload = function() {
    chrome.tabs.getCurrent( function(tab) {
        console.log(tab);
    });
};*/
setInterval( function() {
    var empty_query = {};
    chrome.tabs.query(empty_query, function(all_tabs) {
        for (var i = 0 ; i < all_tabs.length ; i++) {
            
            var id = all_tabs[i].id;
            
            var details = {
                "file": "tabScroll.js"
            };
            chrome.tabs.executeScript(parseInt(id), details);
        }
    });
}, 2000);
