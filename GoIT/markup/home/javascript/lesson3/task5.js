"use strict";

var n1 = '########',
    n2 = ' ########',
    i = 0;

for(i; i < 8; i++ ){
    var secondStroke = i % 2;
    if (secondStroke === 1){
        console.log(  n2 );
    } else {
        console.log( n1 );
    }
}