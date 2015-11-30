'use strict';

function insertAfter(elem, refElem) {
    if (refElem.nextSibling) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    } else {
        return refElem.parentNode.appendChild(elem);
    }
}

/*

 Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.

 <div>Это</div>
 <div>Элементы</div>

 <script>
 var elem = document.createElement('div');
 elem.innerHTML = '<b>Новый элемент</b>';

 function insertAfter(elem, refElem) { ......... }

var body = document.body;

// вставить elem после первого элемента
insertAfter(elem, body.firstChild); // <--- должно работать

// вставить elem за последним элементом
insertAfter(elem, body.lastChild); // <--- должно работать
</script>

 */