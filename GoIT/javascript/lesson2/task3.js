var userName=prompt('??????? ??? ?????', '')

if (userName==='admin') {
    var pass=prompt('??????? ??????', '');

    if (pass==='passw0rd') {
        alert('Welcome home!');
    } else {
        alert('Wrong password!');
    }
} else if (userName==null) {
    alert('Canceled');
} else {
    alert('Access Denied!');}