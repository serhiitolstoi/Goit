'use strict';

var ul = document.body.children[0];
ul.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li><li>5</li>");


/*
 �������� ��� ��� ������� ������ html � ����� ������ ul � �������������� ������ insertAdjacentHTML. ����� �������, � ������� �� ���������� innerHTML+=, �� ����� �������������� ������� ����������.

 �������� � ������ ���� �������� <li>3</li><li>4</li><li>5</li>:

 <ul>
 <li>1</li>
 <li>2</li>
 </ul>

 */