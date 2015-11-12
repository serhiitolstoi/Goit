'use strict';

//Write a JavaScript function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case.

function makeFirstLetterBig(str) {
    var words = str.split(' ');

    return words.map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(makeFirstLetterBig('the quick brown fox'));