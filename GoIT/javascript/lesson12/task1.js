'use strict';

//Ќапишите функцию printNumbersInterval(), котора€ последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100мс.
// “о есть, весь вывод должен занимать 2000мс, в течение которых каждые 100мс в консоли по€вл€етс€ очередное число.

function printNumbersInterval() {
    var i = 1;
    var timerId = setInterval(function() {
        console.log(i);
        if (i == 20) clearInterval(timerId);
        i++;
    }, 100);
}

// вызов
printNumbersInterval();