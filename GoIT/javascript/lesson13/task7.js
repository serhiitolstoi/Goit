'use strict';

/* �������� ����� ��� ������������ Fridge(power), ����������� �� Machine, � ��������� ��������� food � �������� addFood(...), getFood():
 ��������� �������� food ������ ������ ���.
 ��������� ����� addFood(item) ��������� � ������ food ����� ���, �������� ����� � ����������� ����������� addFood(item1, item2...) ��� ���������� ���������� ��������� �����.
 ���� ����������� ��������, �� �������� ��� ������, ����� ������.
 ������������ ���������� ��� ���������� power/100, ��� power � �������� ������������, ����������� � ������������. ��� ������� �������� ������ � ����� ������
 ��������� ����� getFood() ���������� ��� � ���� �������, ���������� ��� �������� ��������� �� �������� �� ������ ������ �� �������� food ������������.
 */

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

}


var fridge = new Fridge(200);
fridge.addFood("�������"); // ������, ����������� ��������

// ������� ����������� ��������� 500 (�� ����� 5 ���)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("�������");
fridge.addFood("���", "������");
fridge.addFood("�������", "�����", "����"); // ������, ������� ����� ���

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("�������");
fridge.addFood("���", "�������");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // �������, ���, �������

// ���������� ��������� �� ������ �� ��� � ������������
fridgeFood.push("�����", "�����");

alert( fridge.getFood() ); // ������ ��-��������: �������, ���, �������