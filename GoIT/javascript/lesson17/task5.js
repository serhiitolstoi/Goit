'use strict';

var ul = document.createElement(ul);
document.body.appendChild(ul);

while(true) {
    var value = prompt('Enter any value');
    if (!value) break;

    var li = document.createElement(li);
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);

}




/*

 �������� ��������� ��� �������� ������.

 ��� ������� ������:

 ������������ ���������� ������ � ������������ � ������� prompt.
 ���������� ����� � ���������� ��� � UL.
 ������� �����������, ����� ������������ �������� ESC ��� ������ ������ ������.
 ��� �������� ������ ����������� �����������.

 ���� ���������� ������ ���� � ����� � ������ ��� ������������ ��� ������� �����.

 */