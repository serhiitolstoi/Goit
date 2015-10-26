"use strict";

var userNumber;

do {
    userNumber = +prompt('Enter any number that is greater than 100:', 0);
    if (userNumber==false) { break; }
} while (userNumber <= 100);