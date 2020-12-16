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
