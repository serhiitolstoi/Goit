'use strict';

var head = {
    glasses: 1
};

var table = {
    pen: 3
};

var bed = {
    sheet: 1,
    pillow: 2
};

var pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.pen);
console.log(bed.glasses);
console.log(table.money);



/* ���� �������:

 var head = {
 glasses: 1
 };

 var table = {
 pen: 3
 };

 var bed = {
 sheet: 1,
 pillow: 2
 };

 var pockets = {
 money: 2000
 };

 ������� ������� �� ���� ������:

 ��������� �������� ������ __proto__ ���, ����� ����� ����� ����-���� ��� �� ��������� pockets -> bed -> table -> head.
 �� ���� pockets.pen == 3, bed.glasses == 1, �� table.money == undefined.

 ����� ����� �������� �� ������, ��� ������� ������ glasses: ���������� � pockets.glasses ��� head.glasses? ���������� ��������������.
 */




