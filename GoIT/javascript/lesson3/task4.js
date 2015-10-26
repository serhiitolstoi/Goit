"use strict";

for (i=1; i<101; i++) {
    var fizz = i%3;
    var buzz = i%5;
    if (fizz == 0 || buzz ==0) {
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}