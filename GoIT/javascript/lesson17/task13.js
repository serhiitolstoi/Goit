'use strict';

var ball = document.getElementById('ball');
var field = document.getElementById('field');

ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';


/*

 ��������� ��� � ����� ����.

 ������ CSS ������, ��� ������ ���������� � ����� ��� ������, ����� ��������� ������ ������ ��������.
 JavaScript-��� ������ �������� ��� ������ �������� ���� (10, 20, 30 ��������) ��� ���������.
 JavaScript-��� ������ �������� ��� ��������� �������� � ��������������� ���� �� �������� ��� ���������. ����� �� �� ������ �������� �� ������ ����� ���� border.


 */