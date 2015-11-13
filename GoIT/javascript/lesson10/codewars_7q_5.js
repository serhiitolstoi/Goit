//Given an array, find the duplicates in that array, and return a new array of those duplicates.
// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).

function duplicates(arr) {
    arr = arr.sort(function(a,b){ return a - b;});
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i-1] === arr[i] && newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}