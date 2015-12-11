'use strict';

function makeLogging(f, log) {

    function wrapper() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }

    return wrapper;
}



/*

 �������� ��������� makeLogging(func, log), ��� ������� func ������������ ������, ������� ��� ������ ������ ��������� � ��������� � ������ log.

 ������� ���������� ������ ���������� ��������� (1 ��������), �� ����������� func � ����� ������� ����������.

 �������� ������ ���:

 function work(a, b) {
 alert( a + b ); // work - ������������ �������
 }

 function makeLogging(f, log) { // .... }

 var log = [];
 work = makeLogging(work, log);

 work(1, 2); // 3
 work(4, 5); // 9

 for (var i = 0; i < log.length; i++) {
 var args = log[i]; // ������ �� ���������� i-�� ������
 alert( '���:' + args.join() ); // "���:1,2", "���:4,5"
 };

 */