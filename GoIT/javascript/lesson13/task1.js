'use strict';

//�������� ��������� ������ ��� ���������� �������� power, ����� ������� ��� ��� ������ �������� ���������.


function CoffeeMachine(power, capacity) {

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("�������� ������ ���� �������������");
        }
        if (amount > capacity) {
            throw new Error("������ ������ ���� ������, ��� " + capacity);
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