'use strict';

function removeChildren(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}

/*
 �������� ������� removeChildren, ������� ������� ���� �������� ��������.

 <table id="table">
 <tr>
 <td>���</td>
 <td>���</td>
 <td>�������� DOM</td>
 </tr>
 </table>

 <ol id="ol">
 <li>����</li>
 <li>����</li>
 <li>����</li>
 <li>����</li>
 </ol>

 <script>
 function removeChildren(elem) { ........... }

removeChildren(table); // ������� �������
removeChildren(ol); // ������� ������
</script>
 */