'use strict';

if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

var elem = document.body.children[0];

elem.remove();



/*

 Напишите полифилл для метода remove для старых браузеров.

 Вызов elem.remove():

 Если у elem нет родителя — ничего не делает.
 Если есть — удаляет элемент из родителя.

 <div>Это</div>
 <div>Все</div>
 <div>Элементы DOM</div>

 <script>
...ваш код полифилла

var elem = document.body.children[0];

elem.remove(); // <-- вызов должен удалить элемент
</script>

 */