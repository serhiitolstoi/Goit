'use strict';

var ball = document.getElementById('ball');
var field = document.getElementById('field');

ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';


/*

 ѕоместите м€ч в центр пол€.

 ћен€ть CSS нельз€, м€ч должен переносить в центр ваш скрипт, через установку нужных стилей элемента.
 JavaScript-код должен работать при разных размерах м€ча (10, 20, 30 пикселей) без изменений.
 JavaScript-код должен работать при различных размерах и местоположени€х пол€ на странице без изменений. “акже он не должен зависеть от ширины рамки пол€ border.


 */