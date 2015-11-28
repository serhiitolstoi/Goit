'use strict';

var list = document.getElementsByTagName('li');

for (var i = 0, len = list.length; i < len; i++) {
    var name = list[i].firstChild.data.trim(),
        childQuantity = list[i].getElementsByTagName('li').length;

    alert (name + ': ' + childQuantity);
}



/*
 ���� ������ �� ����� <ul>/<li>.

 �������� ���, ������� ��� ������� �������� <li> �������:

 ����� ��������������� � �� (��� �����������).
 ���������� ��������� � ���� ��������� <li> � ����, � ������ ���������.

 <!DOCTYPE HTML>
 <html>

 <head>
 <meta charset="utf-8">
 </head>

 <body>

 <ul>
 <li>��������
 <ul>
 <li>�������������
 <ul>
 <li>������</li>
 <li>����</li>
 <li>������</li>
 <li>�����</li>
 </ul>
 </li>
 <li>������
 <ul>
 <li>����</li>
 <li>�����</li>
 <li>�������</li>
 </ul>
 </li>
 </ul>
 </li>
 <li>����
 <ul>
 <li>�����������
 <ul>
 <li>�����</li>
 <li>��������</li>
 </ul>

 </li>
 <li>�������
 <ul>
 <li>������� ������</li>
 </ul>
 </li>
 </ul>
 </li>
 </ul>

 <script>
 // .. ��� ��� ..
 </script>

 </body>

 </html>
*/