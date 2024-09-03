window.addEventListener("load", event => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const targetDate = new Date("2024-10-04T23:30:00").getTime();

    setTimeout(() => {
        let x = setInterval(function () {
            let now = new Date().getTime(),
                distance = targetDate - now;

            document.getElementById('days').innerText = Math.floor(distance / (day));
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0) {
                clearInterval(x);
                document.getElementById('days').innerText = '0';
                document.getElementById('hours').innerText = '0';
                document.getElementById('minutes').innerText = '0';
                document.getElementById('seconds').innerText = '0';
            }

        }, second);

    }, 500);

    if (window.innerWidth < 799) {
        document.querySelector('.wrapper').style.height = window.innerHeight + "px";
    }
});
