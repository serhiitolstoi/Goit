'use strict';

var list = document.getElementsByTagName('li');

for (var i = 0, len = list.length; i < len; i++) {
    var name = list[i].firstChild.data.trim(),
        childQuantity = list[i].getElementsByTagName('li').length;

    alert (name + ': ' + childQuantity);
}



/*
 Есть дерево из тегов <ul>/<li>.

 Напишите код, который для каждого элемента <li> выведет:

 Текст непосредственно в нём (без подразделов).
 Количество вложенных в него элементов <li> — всех, с учётом вложенных.

 <!DOCTYPE HTML>
 <html>

 <head>
 <meta charset="utf-8">
 </head>

 <body>

 <ul>
 <li>Животные
 <ul>
 <li>Млекопитающие
 <ul>
 <li>Коровы</li>
 <li>Ослы</li>
 <li>Собаки</li>
 <li>Тигры</li>
 </ul>
 </li>
 <li>Другие
 <ul>
 <li>Змеи</li>
 <li>Птицы</li>
 <li>Ящерицы</li>
 </ul>
 </li>
 </ul>
 </li>
 <li>Рыбы
 <ul>
 <li>Аквариумные
 <ul>
 <li>Гуппи</li>
 <li>Скалярии</li>
 </ul>

 </li>
 <li>Морские
 <ul>
 <li>Морская форель</li>
 </ul>
 </li>
 </ul>
 </li>
 </ul>

 <script>
 // .. ваш код ..
 </script>

 </body>

 </html>
*/