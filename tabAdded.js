console.log("a tab has been added!");
var title = document.getElementsByTagName("title")[0];
if (title) {
    title.innerHTML = title.innerHTML + " ";
}
