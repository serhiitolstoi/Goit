'use strict';

Function.prototype.defer = function(ms) {
    setTimeout(this,ms);

};

function f() {
    alert( "������" );
}

f.defer(1000);

/*
 �������� ���� �������� � �������� ����� defer(ms), ������� ����������� ����� ������� �� ms �����������.

 ����� ����� ������ �������� ����� ���:

 function f() {
 alert( "������" );
 }

 f.defer(1000); // ������� "������" ����� 1 �������
 */




