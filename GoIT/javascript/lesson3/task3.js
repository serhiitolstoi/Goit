"use strict";

for (i=1; i<101; i++) {
    var fizz = i%3;
    var buzz = i%5;
    if (fizz == 0) {
        console.log('Fizz');
    } else if(buzz ==0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}