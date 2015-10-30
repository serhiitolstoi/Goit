'use strict';

//Напишите код, который:

//Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
//При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//Выводит сумму всех значений массива когда ввод прекращен.


var arr = [];
var sum = 0;
function calcSum() {
    do {
        var number = prompt('Make some magic with numbers! \nEnter numbers in the field below:', '0');
        if (isNaN(number)) {
            break;
        }
        else {
            arr.push(+number);
        }
    }
    while (number!= null);

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum;
}
console.log(calcSum(arr));