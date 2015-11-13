//Given a string, swap the case for each of the letters.
// e.g. CodEwArs --> cODeWaRS

function swap(str){
    var arr = str.split('');
    var newArr= [];
    for(var i=0; i<arr.length; i++) {
        var char = arr[i];
        if(char === char.toLowerCase()) {
            newArr[i] = char.toUpperCase();
        } else {
            newArr[i] = char.toLowerCase();
        }
    }
    return newArr.join('');
}