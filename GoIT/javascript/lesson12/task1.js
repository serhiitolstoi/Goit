'use strict';

//�������� ������� printNumbersInterval(), ������� ��������������� ������� � ������� ����� �� 1 �� 20, � ���������� ����� ������� 100��.
// �� ����, ���� ����� ������ �������� 2000��, � ������� ������� ������ 100�� � ������� ���������� ��������� �����.

function printNumbersInterval() {
    var i = 1;
    var timerId = setInterval(function() {
        console.log(i);
        if (i == 20) clearInterval(timerId);
        i++;
    }, 100);
}

// �����
printNumbersInterval();