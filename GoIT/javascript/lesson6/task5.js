'use strict';
//Палиндром - это строка которая читается с обоих сторон одинаково.
// Например: Анна, оно, А роза упала на лапу Азора.

//Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.



function  isPal(string) {
    var strArr = string.toLowerCase().split(' ').join('');
    var reverseStrArr = '';

    for (i=strArr.length-1; i >= 0; i--) {
        reverseStrArr += strArr[i];
    }

    if (strArr == reverseStrArr) {
        return true;
    } else {
        return false;
    }
}



console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false