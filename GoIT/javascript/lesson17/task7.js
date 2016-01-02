'use strict';

function createCalendar(id, year, month) {
    var elem = document.getElementById(id);

    var mon = month - 1; // ������ � JS ���� �� 0 �� 11, � �� �� 1 �� 12
    var d = new Date(year, mon);

    var table = '<table><tr><th>��</th><th>��</th><th>��</th><th>��</th><th>��</th><th>��</th><th>��</th></tr><tr>';

    // ��������� ������ ��� �� ������������
    // � �� ���, � �������� ���������� �����
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // ������ ��������� � ������
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // ��, ��������� ���� - ������� ������
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // ������ ������� ������� ��������, ���� �����
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // ������� �������
    table += '</tr></table>';

    // ������ ���� ������������ innerHTML
    elem.innerHTML = table;
}

function getDay(date) { // �������� ����� ��� ������, �� 0(��) �� 6(��)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar("calendar", 2012, 9);



/*
 �������� �������, ������� ����� ������������ ��������� ��� �������� ���� (�����, ���).

 ��������� ������ ���� ��������, ��� ������ ���� � ��� TD. � ������� ������ ���� ��������� � ���������� ���� ������, ������ ���� � TH.

 ���������: createCalendar(id, year, month).

 ����� ����� ������ ������������ ����� ��� ��������� ������ month � ���� year, � ����� �������� ��� ������ �������� � ��������� id.

 ��������: createCalendar("cal", 2012, 9) ����������� � <div id='cal'></div> ��������� ���������:

 */
