'use strict';

var linksList = document.querySelectorAll('a');

for (var i = 0, len = linksList.length; i < len; i++) {
    var linksListItem = linksList[i];
    var link = linksListItem.getAttribute('href');

    if (!link) continue;
    if (link.indexOf('://') == -1) continue;
    if (link.indexOf('http://internal.com') == 0 ) continue;

    linksListItem.classList.add('external');

}

/*

 —делайте желтыми внешние ссылки, добавив им класс external.
 ¬се ссылки без href, без протокола и начинающиес€ с http://internal.com считаютс€ внутренними.

 <style>
 .external {
 background-color: yellow
 }
 </style>

 <a name="list">список</a>
 <ul>
 <li><a href="http://google.com">http://google.com</a></li>
 <li><a href="/tutorial">/tutorial.html</a></li>
 <li><a href="local/path">local/path</a></li>
 <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
 <li><a href="http://nodejs.org">http://nodejs.org</a></li>
 <li><a href="http://internal.com/test">http://internal.com/test</a></li>
 </ul>

 */