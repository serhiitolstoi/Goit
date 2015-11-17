'use strict';

//Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.


function CoffeeMachine(power, capacity) {

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        var waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function() {
        return power;
    };
}

var coffeMachine1 = new CoffeeMachine(1000, 750);
console.log(coffeMachine1.getPower());