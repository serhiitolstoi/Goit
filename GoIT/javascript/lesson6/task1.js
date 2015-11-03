'use strict';

//У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами
//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть
//P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке

var obj = {
    className: 'open menu menu sim'
};

function  removeClass(obj, cls) {
    var arr = obj.className.split(' ');

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice (i, 1);
            i--;
        }
    }

    obj.className = arr.join(' ');
}

removeClass(obj, 'menu');
alert(obj.className);