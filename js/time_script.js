window.addEventListener("load", async event => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    const targetDateUTC8 = new Date("2024-10-10T23:55:00+08:00").getTime();

    let localTargetDate = targetDateUTC8;

    try {
        const response = await fetch("https://ipinfo.io?token=03fcf3b352e7a2");
        const data = await response.json();
        const timezone = data.timezone;

        const currentDate = new Date();

        const localOffset = currentDate.getTimezoneOffset() * minute;

        const targetDate = new Date(targetDateUTC8 + localOffset + (new Date().toLocaleString("en-US", { timeZone: timezone })).getTimezoneOffset() * minute);
        localTargetDate = targetDate.getTime();

    } catch (error) {
        console.error("Error", error);
        localTargetDate = targetDateUTC8;
    }

    setTimeout(() => {
        let x = setInterval(function () {
            let now = new Date().getTime(),
                distance = localTargetDate - now;

            if (distance < 0) {
                clearInterval(x);
                document.querySelector('.timer').style.display = 'none';
                document.querySelector('.timer_end').style.display = 'block';
                return; 
            }

            const days = Math.floor(distance / day);
            const hours = Math.floor((distance % day) / hour);
            const minutes = Math.floor((distance % hour) / minute);
            const seconds = Math.floor((distance % minute) / second);

            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;

        }, second);

    }, 500);

    if (window.innerWidth < 799) {
        document.querySelector('.wrapper').style.height = window.innerHeight + "px";
    }
});
