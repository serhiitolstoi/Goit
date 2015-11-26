'use strict';

function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("������");
speedy.found("����");

alert( speedy.food.length );
alert( lazy.food.length );



/*
 �� � ������������ �������, ������� ������������� ����, ��������� �����.
 ���� �� ������������� ������� ������� ������� ����� ������ (���� � "Hamster").

 �������-������ ������ ����� ������ food ��� �������� ��� � ����� found, ������� ��������� � ����.

 ���� � ��� �������. ��� �������� ���� �������, ���� ���� ���� � ������-�� ����� ���������� � ������ ����.

 � ��� ����? ��� ���������?

 function Hamster() {}

 Hamster.prototype.food = []; // ������ "�����"

 Hamster.prototype.found = function(something) {
 this.food.push(something);
 };

 // ������ ���� ������� � ������ �������
 var speedy = new Hamster();
 var lazy = new Hamster();

 speedy.found("������");
 speedy.found("����");

 alert( speedy.food.length ); // 2
 alert( lazy.food.length ); // 2 (!??)

 */




