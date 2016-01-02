'use strict';


function showNotification(options) {

    var notification = document.createElement('div');
    notification.className = "notification";
    if (options.cssText) {
        notification.style.cssText = options.cssText;
    }
    notification.style.top = (options.top || 0) + 'px';
    notification.style.right = (options.right || 0) + 'px';
    if (options.className) {
        notification.classList.add(options.className);
    }

    notification.innerHTML = options.html;
    document.body.appendChild(notification); // over cover

    setTimeout(function() {
        document.body.removeChild(notification);
    }, 1500);
}

var i = 0;
setInterval(function() {
    showNotification({
        top: 10,
        right: 10,
        html: 'Привет ' + ++i,
        className: "welcome"
    });
}, 4500);





/*
 Напишите функцию showNotification(options), которая показывает уведомление, пропадающее через 1.5 сек.

 Описание функции:

 * Показывает уведомление, пропадающее через 1.5 сек

 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
 * @param options.cssText {string} строка стиля
 * @param options.className {string} CSS-класс
 * @param options.html {string} HTML-текст для показа

function showNotification(options) {

}
Пример использования:

покажет элемент с текстом "Привет" и классом welcome справа-сверху окна
    showNotification({
        top: 10,
        right: 10,
        html: "Привет",
        className: "welcome"
    });
Демо в новом окне

Элемент уведомления должен иметь CSS-класс notification, к которому добавляется класс из options.className, если есть. Исходный документ содержит готовые стили.

    Открыть песочницу для задачи.
 */
