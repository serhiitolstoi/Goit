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

 �������� �������� ��� ������ remove ��� ������ ���������.

 ����� elem.remove():

 ���� � elem ��� �������� � ������ �� ������.
 ���� ���� � ������� ������� �� ��������.

 <div>���</div>
 <div>���</div>
 <div>�������� DOM</div>

 <script>
...��� ��� ���������

var elem = document.body.children[0];

elem.remove(); // <-- ����� ������ ������� �������
</script>

 */