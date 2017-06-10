/*window.onload = function() {
    chrome.tabs.getCurrent( function(tab) {
        console.log(tab);
    });
};*/
setInterval( function() {
    var empty_query = {};
    chrome.tabs.query(empty_query, function(all_tabs) {
        for (var i = 0; i < all_tabs.length ;i++) {
            var scroll_title = all_tabs[i].title;
            scroll_title = scroll_title.substring(1, scroll_title.length) + scroll_title[0];
            all_tabs[i].title = scroll_title;
            console.log(all_tabs[i].title);
        }
    });
}, 2000);
