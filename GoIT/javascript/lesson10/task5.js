'use strict';

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function getLongestWord(str) {
    var arr = str.split(' ');
    var longestWord='';

    for (var i=0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) longestWord = arr[i];
    }
        return longestWord;
}

console.log(getLongestWord('Web Development Tutorial'));
