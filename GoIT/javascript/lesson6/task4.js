'use strict';

//�������� ���, ������� ����������� ������ �������� people �� ���� age.


var vasya = { name: '����', age: 23 };
var masha = { name: '����', age: 18 };
var vovochka = { name: '�������', age: 6 };

var people = [ vasya , masha , vovochka ];

function sortArrByObjAge(a, b) {
    return a.age- b.age
}

people.sort(sortArrByObjAge);


// ������ people: [vovochka, masha, vasya]
    console.log(people[0].age); // 6
