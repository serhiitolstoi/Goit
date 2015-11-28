'use strict';

//1. Все элементы label внутри таблицы. Должно быть 3 элемента.
document.getElementById('age-table').getElementsByTagName('label');
//or
document.querySelectorAll('table label');
//  2. Первую ячейку таблицы (со словом "Возраст").
document.querySelector('table tr td');
//or
document.getElementById('age-list').previousElementSibling;
// 3. Вторую форму в документе.
document.getElementsByTagName('form')[1];
// 4. Форму с именем search, без использования её позиции в документе.
document.querySelectorAll( 'form[name="search"]' );
// 5. Элемент input в форме с именем search. Если их несколько, то нужен первый.
document.querySelector('form[name="search"] input');
// 6. Элемент с именем info[0], без точного знания его позиции в документе.
document.querySelectorAll( '[name="info[0]"]' );
// 7. Элемент с именем info[0], внутри формы с именем search-person.
document.querySelectorAll( 'form[name="search-person"] [name="info[0]"]' );



/*
 Ниже находится документ с таблицей и формой.

 <!DOCTYPE HTML>
 <html>

 <head>
 <meta charset="utf-8">
 </head>

 <body>
 <form name="search">
 <label>Поиск по сайту:
 <input type="text" name="search">
 </label>
 <input type="submit" value="Искать!">
 </form>

 <hr>

 <form name="search-person">
 Поиск по посетителям:
 <table id="age-table">
 <tr>
 <td>Возраст:</td>
 <td id="age-list">
 <label>
 <input type="radio" name="age" value="young">до 18</label>
 <label>
 <input type="radio" name="age" value="mature">18-50</label>
 <label>
 <input type="radio" name="age" value="senior">более 50</label>
 </td>
 </tr>

 <tr>
 <td>Дополнительно:</td>
 <td>
 <input type="text" name="info[0]">
 <input type="text" name="info[1]">
 <input type="text" name="info[2]">
 </td>
 </tr>

 </table>

 <input type="submit" value="Искать!">
 </form>
 </body>

 </html>
*/