'use strict';

function getDocumentScroll() {
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    return {
        top: pageYOffset,
        bottom: pageYOffset + document.documentElement.clientHeight,
        height: scrollHeight
    };
}



/*

 Ќапишите функцию getDocumentScroll(), котора€ возвращает объект с информацией о текущей прокрутке и области видимости.

 —войства объекта-результата:

 top Ч координата верхней границы видимой части (относительно документа).
 bottom Ч координата нижней границы видимой части (относительно документа).
 height Ч полна€ высота документа, включа€ прокрутку.
 ¬ этой задаче учитываем только вертикальную прокрутку: горизонтальна€ делаетс€ аналогично, а нужна сильно реже.

 */