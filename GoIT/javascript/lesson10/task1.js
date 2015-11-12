'use strict';

//Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив состоящий только из чисел или строк.
// Написать метод extractNumber или extractString, который будет возвращать массив.

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

function extractNumber(obj) {
    var arr = [];
    for (var key in obj) {
        if(!isNaN(+obj[key])) arr.push(obj[key]);
    }
    return arr;
}

function extractString(obj) {
    var arr = [];
    for (var key in obj) {
        if(isNaN(obj[key])) arr.push(obj[key]);
    }
    return arr;
}

console.log(extractNumber(obj));
console.log(extractString(obj));

