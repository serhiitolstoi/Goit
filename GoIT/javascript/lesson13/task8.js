'use strict';

//�������� � ����������� ������:
// ��������� ����� filterFood(func), ������� ���������� ��� ���, ��� ������� func(item) == true
// ��������� ����� removeFood(item), ������� ������� ��� item �� ������������.


function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    // ������������
    Machine.apply(this, arguments);

    var food = []; // ��������� �������� food

    this.addFood = function() {
        if (!this._enabled) {
            throw new Error("����������� ��������");
        }
        if (food.length + arguments.length >= this._power / 100) {
            throw new Error("������ ��������, �� ������� ��������");
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]); // �������� �� �� arguments
        }

    };

    this.getFood = function() {
        // �������� ��� � ����� ������, ����� ����������� � ��� �� ������ food
        return food.slice();
    };

    this.filterFood = function(filter) {
        return food.filter(filter);
    };

    this.removeFood = function(item) {
        var idx = food.indexOf(item);
        if (idx != -1) food.splice(idx, 1);
    };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "�������",
    calories: 100
});
fridge.addFood({
    title: "���",
    calories: 30
});
fridge.addFood({
    title: "������",
    calories: 10
});
fridge.addFood({
    title: "�������",
    calories: 150
});

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

fridge.removeFood("��� ����� ���"); // ��� �������
alert( fridge.getFood().length ); // 4

dietItems.forEach(function(item) {
    alert( item.title ); // ���, ������
    fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2
