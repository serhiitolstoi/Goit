'use strict';

function insertAfter(elem, refElem) {
    if (refElem.nextSibling) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    } else {
        return refElem.parentNode.appendChild(elem);
    }
}

/*

 �������� ������� insertAfter(elem, refElem), ������� ������� elem ����� ���� refElem.

 <div>���</div>
 <div>��������</div>

 <script>
 var elem = document.createElement('div');
 elem.innerHTML = '<b>����� �������</b>';

 function insertAfter(elem, refElem) { ......... }

var body = document.body;

// �������� elem ����� ������� ��������
insertAfter(elem, body.firstChild); // <--- ������ ��������

// �������� elem �� ��������� ���������
insertAfter(elem, body.lastChild); // <--- ������ ��������
</script>

 */