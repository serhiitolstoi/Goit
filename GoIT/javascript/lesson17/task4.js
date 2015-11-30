'use strict';

function removeChildren(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}

/*
 Напишите функцию removeChildren, которая удаляет всех потомков элемента.

 <table id="table">
 <tr>
 <td>Это</td>
 <td>Все</td>
 <td>Элементы DOM</td>
 </tr>
 </table>

 <ol id="ol">
 <li>Вася</li>
 <li>Петя</li>
 <li>Маша</li>
 <li>Даша</li>
 </ol>

 <script>
 function removeChildren(elem) { ........... }

removeChildren(table); // очищает таблицу
removeChildren(ol); // очищает список
</script>
 */