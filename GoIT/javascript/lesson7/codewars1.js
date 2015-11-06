function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        callbacks.push(function(x) {
            return function() {return x;}
        }(i));
    } return callbacks;
}