'use strict';

//� ������� ���� �������� className, ������� ������ ������ css ������ � ����, ����������� ���������
//�������� ������� removeClass(obj, cls), ������� ������� ����� cls, ���� �� ����
//P.S. �������������� ����������. ������� ������ ��������� ������������ ������������ ������ � ������

var obj = {
    className: 'open menu menu sim'
};

function  removeClass(obj, cls) {
    var arr = obj.className.split(' ');

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice (i, 1);
            i--;
        }
    }

    obj.className = arr.join(' ');
}

removeClass(obj, 'menu');
alert(obj.className);