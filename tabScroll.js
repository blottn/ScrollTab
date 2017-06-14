var title = document.getElementsByTagName("title")[0].innerHTML;
title = title.substring(1,title.length) + title[0];
document.getElementsByTagName("title")[0].innerHTML = title;
