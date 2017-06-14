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
}, 600);


//TODO set tab creation event which adds a space to the title and marks a tab as scrollable

chrome.tabs.onCreated.addListener( new function(tab) {
    script_details = {
        "file": "tabAdded.js"
    };
    chrome.tabs.executeScript(tab.id, script_details);
});
