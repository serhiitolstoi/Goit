//Let's build a calculator that can calculate the average for an arbitrary number of arguments.
//The test expects you to provide a Calculator object with an average method:
//The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
//It expects Calculator.average(3,4,5) to return 4.

var Calculator = {

    average: function() {
        if (arguments.length === 0) return 0;

        var arg = [].slice.call(arguments);

        var sum = arg.reduce(function (sum, current) {
            return sum + current;
        });

        return sum/arg.length;
    }

};

console.log(Calculator.average(1,2,3,4,5,6));