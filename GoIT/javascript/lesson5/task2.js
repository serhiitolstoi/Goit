'use strict';

//�������� ������� multiplyNumeric ������� ��������� �� ���� ������ �
// ���������� ������ � ������� ��� �������� �������� � ������� �������� �� 2.


var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var newValue = 0;
function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(image);

