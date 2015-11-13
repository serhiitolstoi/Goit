/*
 You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.
 Rules:
 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-?,100]
 */

function pattern(n) {
    var i, line = '', lines = [];
    for (i=1;i<=n;i++) line += i%10;
    for (i=0;i<n;i++) lines.push(Array(n-i).join(' ')+line+Array(i+1).join(' '));
    return lines.join("\n");
}