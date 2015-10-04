var userName=prompt('¬ведите ваш логин', '')

if (userName==='admin') {
    var pass=prompt('¬ведите пароль', '');

    if (pass==='passw0rd') {
        alert('Welcome home!');
    } else {
        alert('Wrong password!');
    }
} else if (userName==null) {
    alert('Canceled');
} else {
    alert('Access Denied!');}