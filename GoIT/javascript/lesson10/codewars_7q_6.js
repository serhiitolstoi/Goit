//This kata is all about adding numbers.
// You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
// Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
// Remember the function will return 0 if no arguments are passed.

function add() {
    if (arguments[0] == undefined) return 0;
    return [].slice.call(arguments).reduce(function(a,b, index) {return a+b*(index+1)})
}