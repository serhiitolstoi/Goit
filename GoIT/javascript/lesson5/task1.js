'use strict';

//Напишите код который выведет сотрудника который выполнил больше всех задач.

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99,
    'Petia': 22
};

var max = 0;
var maxName = "";
for (var name in tasksCompleted) {
    if (max < tasksCompleted[name]) {
        max = tasksCompleted[name];
        maxName = name;
    }
}




