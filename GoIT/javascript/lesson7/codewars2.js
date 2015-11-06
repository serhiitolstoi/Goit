function createSecretHolder(secret) {
    var obj = {};

    obj.setSecret = function(x) {
        return secret = x};
    obj.getSecret = function() {
        return secret};

    return obj;

}