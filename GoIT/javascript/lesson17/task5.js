'use strict';

var ul = document.createElement(ul);
document.body.appendChild(ul);

while(true) {
    var value = prompt('Enter any value');
    if (!value) break;

    var li = document.createElement(li);
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);

}




/*

 Напишите интерфейс для создания списка.

 Для каждого пункта:

 Запрашивайте содержимое пункта у пользователя с помощью prompt.
 Создавайте пункт и добавляйте его к UL.
 Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
 Все элементы должны создаваться динамически.

 Если посетитель вводит теги — пусть в списке они показываются как обычный текст.

 */