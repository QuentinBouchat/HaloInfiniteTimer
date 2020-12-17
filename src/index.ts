import { DateTime, Interval } from 'luxon';
import './styles/style.scss';

const xboxRealease = DateTime.local(2020, 11, 10);

function calculateTimeSinceXboxRealease() {
    const now = DateTime.local();

    const interval = Interval.fromDateTimes(xboxRealease, now);

    const days = Math.floor(interval.length('days'));

    return {
        days: Math.floor(interval.length('days')),
        hours: Math.floor(interval.length('hours') % 24),
        minutes: Math.floor(interval.length('minutes') % 24 % 60),
        seconds: Math.floor(interval.length('seconds') % 24 % 60 % 60),
    };
}

function updateTimer() {
    const times = calculateTimeSinceXboxRealease();
    document.getElementById('timer').innerText = `${times.days} days - ${times.hours} hours - ${times.minutes} minutes - ${times.seconds} seconds`;
}

setInterval(updateTimer, 1000);

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Sep 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)).toString(),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)).toString(),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)).toString(),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second).toString();

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());
