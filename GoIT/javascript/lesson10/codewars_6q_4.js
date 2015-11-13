/*
 The main idea is to count all the occuring characters(UTF-8) in string.
 If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
 What if the string is empty ? Then the result should be empty object literal { }
 */

function count (string) {
    var array = string.toLowerCase().split('');
    var obj = {};
    array.forEach(function(item){
        if(!obj[item]){
            obj[item] = 1;
        }else{
            obj[item] += 1;
        }
    });
    return obj;
}