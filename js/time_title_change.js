function updateTitle() {
    var days = document.getElementById("days").innerText || '0';
    var hours = document.getElementById("hours").innerText || '0';
    var minutes = document.getElementById("minutes").innerText || '0';
    var seconds = document.getElementById("seconds").innerText || '0';

    document.title = "@~@" + days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";
  }