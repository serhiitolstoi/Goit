'use strict';

//Write a JavaScript function that returns a passed string with letters in alphabetical order.

function getAlphabeticalOrder(str) {
    return str.split('').sort().join('')
}

console.log(getAlphabeticalOrder('webmaster'));
