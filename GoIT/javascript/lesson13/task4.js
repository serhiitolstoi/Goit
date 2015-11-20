'use strict';

//�� �������� ���� �� ������ �� ����� ����������� ������ � �������� ��������� ��� ���.
// ��� ����� �������� ��������� ��������� ����� isRunning(), ������� ����� ���������� true, ���� ��� �������� � false, ���� ���.

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var timerId;

    this.isRunning = function() {
        return !!timerId;
    };

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... �������� ��������� ��� ���������
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        alert( '���� �����!' );
    }

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };

    this.run = function() {
        timerId = setTimeout(function() {
            timerId = null;
            onReady();
        }, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( '��: ' + coffeeMachine.isRunning() ); // ��: false

coffeeMachine.run();
alert( '� ��������: ' + coffeeMachine.isRunning() ); // � ��������: true

coffeeMachine.setOnReady(function() {
    alert( "�����: " + coffeeMachine.isRunning() ); // �����: false
});