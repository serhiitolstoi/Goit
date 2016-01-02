'use strict';

function makeTable() {
    var tableHolder = document.getElementById('table-holder');

    var contents = '<thead><th>���</th><th>�������</th><th>��������</th><th>�������</th></thead>';
    contents += '<tbody>';
    for (var i = 0; i < 100; i++) {
        contents += "<tr><td> ... </td><td>������</td><td>������</td><td>" + ((i + 50) % 30) + "</td></tr>";
    }
    contents += '</tbody>';

    tableHolder.innerHTML = '<table>' + contents + '</table>';
}

/* ��������� �������� � ������, ������������� ��� � ������������ */
function sort1() {
    var tbody = document.getElementsByTagName('tbody')[0];
    var rows = [];

    for (var i = tbody.children.length - 1; i >= 0; i--) {
        var child = tbody.removeChild(tbody.children[i]);
        rows.push(child);
    }

    rows.sort(function(a, b) {
        return a.lastChild.innerHTML - b.lastChild.innerHTML;
    });

    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }

}

/* ����������� ������ � ������, ������������� ��� � ������������ */
function sort2() {
    var tbody = document.getElementsByTagName('tbody')[0];
    var rows = [];

    for (var i = 0; i < tbody.children.length; i++) {
        rows.push(tbody.children[i]);
    }

    rows.sort(function(a, b) {
        return a.lastChild.innerHTML - b.lastChild.innerHTML;
    });

    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }

}


/* ������� ������ �� �������� � ������, �������������, ������������
 doRemove = �������������� ������ �� ���������
 */
function sortOpt(doRemove) {
    var tbody = document.getElementsByTagName('tbody')[0];
    var table = tbody.parentNode;
    if (doRemove) table.removeChild(tbody);

    var rows = [];
    for (var i = 0; i < tbody.children.length; i++) {
        var elem = tbody.children[i];
        rows.push({
            value: elem.lastChild.innerHTML,
            elem: elem
        });
    }

    rows.sort(function(a, b) {
        return a.value - b.value;
    });

    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i].elem);
    }

    if (doRemove) table.appendChild(tbody);
}


function bench(f, elem) {
    var sum = 0;
    for (var i = 0; i < 100; i++) {
        makeTable();
        var d = new Date;
        f();
        sum += new Date - d;
    }
    elem.innerHTML = sum + '��';
}


function benchMake(elem) {
    var sum = 0;
    for (var i = 0; i < 100; i++) {
        var d = new Date;
        makeTable();
        sum += new Date - d;
    }
    elem.innerHTML = sum + '��';
}





/*
 ���� �������:

 ���	�������	��������	�������
 ����	������	�������������	10
 ����	������	��������	15
 ��������	�����	�����	9
 �	�	�	�
 ����� � ������� �����: ����� ���� 20, 50, 100.. ���� � ������ �������� � ���������.

 ��� �� �� ���������� ������������� ���������� ������� �� ���� �������? ��������� ��������, ���������� ���.

 ��� �������, ����� ���������� �������� ��� ����� �������? � ���� � ������� 10000 ����� (������ � �����)?

 P.S. ����� �� ����� ������ DocumentFragment?

 P.P.S. ���� ������������, ��� � ��� ������� ���� ������ ������ ��� ������� � JavaScript � ��� �������: ������������� ��� ������� ��� ������������� �����?
 */