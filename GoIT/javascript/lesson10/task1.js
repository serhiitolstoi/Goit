'use strict';

//���� ������ �� �����, ����� � ������ ������. ���������� ��� ���������� � ������ ��������� ������ �� ����� ��� �����.
// �������� ����� extractNumber ��� extractString, ������� ����� ���������� ������.

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

function extractNumber(obj) {
    var arr = [];
    for (var key in obj) {
        if(!isNaN(+obj[key])) arr.push(obj[key]);
    }
    return arr;
}

function extractString(obj) {
    var arr = [];
    for (var key in obj) {
        if(isNaN(obj[key])) arr.push(obj[key]);
    }
    return arr;
}

console.log(extractNumber(obj));
console.log(extractString(obj));

