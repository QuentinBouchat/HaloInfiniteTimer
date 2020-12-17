import './styles/style.scss';

let startDate: number;

// function calculateTimeSinceXboxRealease() {
//     const now = DateTime.local();

//     const interval = Interval.fromDateTimes(xboxRealease, now);

//     const days = Math.floor(interval.length('days'));

//     return {
//         days: Math.floor(interval.length('days')),
//         hours: Math.floor(interval.length('hours') % 24),
//         minutes: Math.floor(interval.length('minutes') % 24 % 60),
//         seconds: Math.floor(interval.length('seconds') % 24 % 60 % 60),
//     };
// }

// function updateTimer() {
//     const times = calculateTimeSinceXboxRealease();
//     document.getElementById('timer').innerText = `${times.days} days - ${times.hours} hours - ${times.minutes} minutes - ${times.seconds} seconds`;
// }

// setInterval(updateTimer, 1000);

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    startDate = new Date(2020, 10, 10).getTime();

    let x = setInterval(function () {

        let now = new Date().getTime();
        let distance = now - startDate;

        document.getElementById("days").innerText = Math.floor(distance / (day)).toString(),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)).toString(),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)).toString(),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second).toString();
    }, 0)
}());
