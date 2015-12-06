'use strict';

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) {
    var li = '';
    for (var key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
        var ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

var container = document.getElementById('container');
createTree(container, data);


/*

 �������� �������, ������� ������ ��������� ������ UL/LI (������) �� �������.

 var data = {
 "����": {
 "������": {},
 "����": {}
 },

 "�������": {
 "�������": {
 "�����������": {},
 "���": {}
 },
 "���������": {
 "�����": {},
 "������": {}
 }
 }
 };

 ���������:
 var container = document.getElementById('container');
 createTree(container, data); // ������

 */