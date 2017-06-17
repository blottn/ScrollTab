setInterval( function() {
    var empty_query = {};
    chrome.tabs.query(empty_query, function(all_tabs) {
        for (var i = 0 ; i < all_tabs.length ; i++) {
            
            var id = all_tabs[i].id;
            
            if( !(all_tabs[i].url.substring(0,9) == "chrome://")) {
                var details = {
                    "file": "tabScroll.js"
                };
                chrome.tabs.executeScript(parseInt(id), details);
            }
        }
    });
}, 600);


//add space to end of title when a tab is updated and/or a tab is created

chrome.tabs.onCreated.addListener( function(new_tab) {
    script_details = {
        "file": "tabAdded.js"
    };
    chrome.tabs.executeScript(new_tab.id, script_details);
});


