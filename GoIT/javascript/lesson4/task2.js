'use strict';

//Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.

function checkSpam(text) {
    var lowCase = text.toLowerCase();
    return lowCase.indexOf('spam')>=0 || lowCase.indexOf('sex')>=0
}

checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false


