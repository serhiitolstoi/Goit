'use strict';

//�������� ���, �������:

//����������� �� ������� �������� ��� ������ prompt � ��������� �� � �������.
//����������� ����, ��� ������ ���������� ����� ������ ������, �� ����� ��� ����� �������.
//��� ���� ���� 0 �� ������ ����������� ����, ��� ����������� �����.
//������� ����� ���� �������� ������� ����� ���� ���������.


var arr = [];
var sum = 0;
function calcSum() {
    do {
        var number = prompt('Make some magic with numbers! \nEnter numbers in the field below:', '0');
        if (isNaN(number)) {
            break;
        }
        else {
            arr.push(+number);
        }
    }
    while (number!= null);

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum;
}
console.log(calcSum(arr));