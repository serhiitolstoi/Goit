'use strict';

function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, 'firstName', {
        get: function() {
            return fullName.split(' ')[0];
        },
        set: function(value) {
            var name = this.fullName.split(' ');
            name[0] = value;
            this.fullName = name.join(' ');
        }
    });

    Object.defineProperty(this, 'lastName', {
        get: function() {
            return fullName.split(' ')[1];
        },
        set: function(value) {
            var name = this.fullName.split(' ');
            name[1] = value;
            this.fullName = name.join(' ');
        }
    });
}

var vasya = new User('Александр Пушкин');

console.log( vasya.firstName );
console.log( vasya.lastName );
