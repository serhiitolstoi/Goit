'use strict';

function Calculator() {
    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };
    this.calculate = function(str) {
        var split = str.split(' '),
            a = +split[0],
            operation = split[1],
            b = +split[2];

        if (!methods[operation] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[operation](+a, +b);
    };

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

var calc = new Calculator;

calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = calc.calculate("45 / 5");
alert( result );