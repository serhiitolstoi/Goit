'use strict';
//��������� - ��� ������ ������� �������� � ����� ������ ���������.
// ��������: ����, ���, � ���� ����� �� ���� �����.

//���������� �������� ������� isPal(string) ������� ���������� true ��� false � ����������� �� ���� �������� �� ������ ����������� ��� ���.



function  isPal(string) {
    var strArr = string.toLowerCase().split(' ').join('');
    var reverseStrArr = '';

    for (i=strArr.length-1; i >= 0; i--) {
        reverseStrArr += strArr[i];
    }

    if (strArr == reverseStrArr) {
        return true;
    } else {
        return false;
    }
}



console.log(isPal('Anna')); // true
console.log(isPal('� ���� ����� �� ���� �����')); //true
console.log(isPal('����')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false