function showtime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = 'AM';
    if (hours== 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = 'PM';
    }
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    hours = (hours < 10) ? '0' + hours : hours;
    var time = hours + ':' + minutes + ':' + seconds + ' ' + session;
    document.getElementById('clock').innerHTML = time;
    setTimeout(showtime, 1000);
}
showtime();