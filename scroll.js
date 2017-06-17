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



chrome.tabs.onCreated.addListener( new function(tab) {
    console.log("printing form the function in the listener?");
    print_tab(tab);
    script_details = {
        "file": "tabAdded.js"
    };
    chrome.tabs.executeScript(tab.id, script_details);
});

function print_tab(tab) {
    console.log(tab);
}
