/*
 The function 'fibonacci' should return an array of fibonacci numbers.
 The function takes a number as an argument to decide how many no. of elements to produce.
 If the argument is less than or equal to 0 then return empty array

 Example:

 fibonacci(4); // should return [0,1,1,2]
 fibonacci(-1); // should return []
 */



function fibonacci(n) {
    if (n > 0) {
        var results = [0]
        for (var i = 1; i <= n -1; i += 1) {
            if (i > 2) {
                results.push(results[i - 1] + results[i - 2]);
            } else {
                results.push(1);
            }
        }
        return results;
    } else {
        return [];
    }
}