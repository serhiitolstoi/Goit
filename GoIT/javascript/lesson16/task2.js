'use strict';

//1. ��� �������� label ������ �������. ������ ���� 3 ��������.
document.getElementById('age-table').getElementsByTagName('label');
//or
document.querySelectorAll('table label');
//  2. ������ ������ ������� (�� ������ "�������").
document.querySelector('table tr td');
//or
document.getElementById('age-list').previousElementSibling;
// 3. ������ ����� � ���������.
document.getElementsByTagName('form')[1];
// 4. ����� � ������ search, ��� ������������� � ������� � ���������.
document.querySelectorAll( 'form[name="search"]' );
// 5. ������� input � ����� � ������ search. ���� �� ���������, �� ����� ������.
document.querySelector('form[name="search"] input');
// 6. ������� � ������ info[0], ��� ������� ������ ��� ������� � ���������.
document.querySelectorAll( '[name="info[0]"]' );
// 7. ������� � ������ info[0], ������ ����� � ������ search-person.
document.querySelectorAll( 'form[name="search-person"] [name="info[0]"]' );



/*
 ���� ��������� �������� � �������� � ������.

 <!DOCTYPE HTML>
 <html>

 <head>
 <meta charset="utf-8">
 </head>

 <body>
 <form name="search">
 <label>����� �� �����:
 <input type="text" name="search">
 </label>
 <input type="submit" value="������!">
 </form>

 <hr>

 <form name="search-person">
 ����� �� �����������:
 <table id="age-table">
 <tr>
 <td>�������:</td>
 <td id="age-list">
 <label>
 <input type="radio" name="age" value="young">�� 18</label>
 <label>
 <input type="radio" name="age" value="mature">18-50</label>
 <label>
 <input type="radio" name="age" value="senior">����� 50</label>
 </td>
 </tr>

 <tr>
 <td>�������������:</td>
 <td>
 <input type="text" name="info[0]">
 <input type="text" name="info[1]">
 <input type="text" name="info[2]">
 </td>
 </tr>

 </table>

 <input type="submit" value="������!">
 </form>
 </body>

 </html>
*/