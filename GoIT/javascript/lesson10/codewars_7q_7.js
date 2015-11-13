//You have to create a function named reverseIt.
//Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order.
//If the data is any other type, return it as it is.

function reverseIt(data){
    var argType = typeof data;

    if (argType === 'string' || argType === 'number') {
        return argType === 'string' ? data.split('').reverse().join('') :
            Number(data.toString().split('').reverse().join(''));
    } else {
        return data;
    }
}

console.log( reverseIt('Hello') );
console.log( reverseIt(314159) );
console.log( reverseIt([1,2,3]) );