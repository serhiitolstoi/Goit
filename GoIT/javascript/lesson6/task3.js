'use strict';

//���������� ������������� ������ � ��������� ������� ��������� ����� sort.

var arr = [1, 2, 6, -2, 3, 4, 5];

function giveRandom(a, b) {
    return Math.random() - 0.5;
}

arr.sort(giveRandom);


console.log( arr ); // �������� � ��������� �������, �������� [3,5,1,2,4]