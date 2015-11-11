'use strict';

function sum() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}


function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}


alert( applyAll(sum, 1, 2, 3) );