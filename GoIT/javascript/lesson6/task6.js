'use strict';

//�������� ������� unique(arr), ������� ���������� ������, ���������� ������ ���������� �������� arr (arr � ������ �����).

var strings = ['������', '������', '����', '����', '����', '����', '������', '������', '8-()' ]

function unique(arr) {
    var array = [];

    next:
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            for (var j = 0; j < array.length; j++) {
                if (array[j] == str) continue next;
            }
            array.push(str);
        }

    return array;

}

console.log( unique(strings) ); // ������, ����, 8-()

