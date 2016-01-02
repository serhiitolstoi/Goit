'use strict';


function showNotification(options) {

    var notification = document.createElement('div');
    notification.className = "notification";
    if (options.cssText) {
        notification.style.cssText = options.cssText;
    }
    notification.style.top = (options.top || 0) + 'px';
    notification.style.right = (options.right || 0) + 'px';
    if (options.className) {
        notification.classList.add(options.className);
    }

    notification.innerHTML = options.html;
    document.body.appendChild(notification); // over cover

    setTimeout(function() {
        document.body.removeChild(notification);
    }, 1500);
}

var i = 0;
setInterval(function() {
    showNotification({
        top: 10,
        right: 10,
        html: '������ ' + ++i,
        className: "welcome"
    });
}, 4500);





/*
 �������� ������� showNotification(options), ������� ���������� �����������, ����������� ����� 1.5 ���.

 �������� �������:

 * ���������� �����������, ����������� ����� 1.5 ���

 * @param options.top {number} ������������ ������, � px
 * @param options.right {number} ������ ������, � px
 * @param options.cssText {string} ������ �����
 * @param options.className {string} CSS-�����
 * @param options.html {string} HTML-����� ��� ������

function showNotification(options) {

}
������ �������������:

������� ������� � ������� "������" � ������� welcome ������-������ ����
    showNotification({
        top: 10,
        right: 10,
        html: "������",
        className: "welcome"
    });
���� � ����� ����

������� ����������� ������ ����� CSS-����� notification, � �������� ����������� ����� �� options.className, ���� ����. �������� �������� �������� ������� �����.

    ������� ��������� ��� ������.
 */
