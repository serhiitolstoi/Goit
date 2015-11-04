'use strict';

//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ]

function unique(arr) {
    var array = [];

    next:
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            for (var j = 0; j < array.length; j++) {
                if (array[j] == str) continue next;
            }
            array.push(str);
        }

    return array;

}

console.log( unique(strings) ); // кришна, харе, 8-()

