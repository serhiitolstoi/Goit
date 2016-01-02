'use strict';

function createCalendar(id, year, month) {
    var elem = document.getElementById(id);

    var mon = month - 1; // мес€цы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);

    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // заполнить первый р€д от понедельника
    // и до дн€, с которого начинаетс€ мес€ц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // €чейки календар€ с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми €чейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}

function getDay(date) { // получить номер дн€ недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar("calendar", 2012, 9);



/*
 Ќапишите функцию, котора€ умеет генерировать календарь дл€ заданной пары (мес€ц, год).

  алендарь должен быть таблицей, где каждый день Ч это TD. ” таблицы должен быть заголовок с названи€ми дней недели, каждый день Ч TH.

 —интаксис: createCalendar(id, year, month).

 “акой вызов должен генерировать текст дл€ календар€ мес€ца month в году year, а затем помещать его внутрь элемента с указанным id.

 Ќапример: createCalendar("cal", 2012, 9) сгенерирует в <div id='cal'></div> следующий календарь:

 */
