'use strict';

//Write a JavaScript function which accepts an argument and returns the type.
//There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(arg) {
    return typeof arg;
}

console.log(getType('string'));
console.log(getType(2));
console.log(getType(2 < 5));
console.log(getType([]));
console.log(getType({}));
console.log(getType(null));
console.log(getType(NaN));
console.log(getType(undefined));

