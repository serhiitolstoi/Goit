'use strict';

//Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.
//Исходный массив не должен меняться.

var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = [];
for (var i = 0; i < arr.length; i++) {
    arrSorted[i] = arr[i];
    arrSorted.sort();
}

console.log(arr);
console.log(arrSorted);