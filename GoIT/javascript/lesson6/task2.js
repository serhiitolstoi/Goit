'use strict';

//���� ������ ����� arr. �������� ������ arrSorted � �� ��� �� ���������, �� ���������������.
//�������� ������ �� ������ ��������.

var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = [];
for (var i = 0; i < arr.length; i++) {
    arrSorted[i] = arr[i];
    arrSorted.sort();
}

console.log(arr);
console.log(arrSorted);