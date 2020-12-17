import { DateTime, Interval } from 'luxon';
import './styles/style.scss';

enum HaloGamesEnum {
    XBOX,
    HALO5,
    HALO4,
    HALO_REACH,
    HALO3,
    HALO2,
    HALO_CE,
}

function gameToHaloGamesEnum(game: string): HaloGamesEnum {
    switch (game) {
        case 'Halo5': return HaloGamesEnum.HALO5;
        case 'Halo4': return HaloGamesEnum.HALO4;
        case 'HaloReach': return HaloGamesEnum.HALO_REACH;
        case 'Halo3': return HaloGamesEnum.HALO3;
        case 'Halo2': return HaloGamesEnum.HALO2;
        case 'HaloCE': return HaloGamesEnum.HALO_CE;
        default: return HaloGamesEnum.XBOX;
    }
}


/* Constantes */
const xboxRealease = DateTime.local(2020, 11, 10);
const halo5Release = DateTime.local(2015, 10, 27);
const halo4Release = DateTime.local(2012, 11, 6);
const haloReachRelease = DateTime.local(2010, 9, 14);
const halo3Release = DateTime.local(2007, 9, 25);
const halo2Release = DateTime.local(2004, 11, 9);
const haloCERelease = DateTime.local(2001, 11, 15);


/* Timer */
let currentGame = HaloGamesEnum.XBOX;

function calculateTimeSince(since: DateTime) {
    const now = DateTime.local();
    const interval = Interval.fromDateTimes(since, now);
    
    return {
        days: Math.floor(interval.length('days')),
        hours: Math.floor(interval.length('hours') % 24),
        minutes: Math.floor(interval.length('minutes') % 60),
        seconds: Math.floor(interval.length('seconds') % 60),
    };
}

function getSinceDateFromHaloGame(game: HaloGamesEnum) {
    switch (game) {
        case HaloGamesEnum.HALO5: return halo5Release;
        case HaloGamesEnum.HALO4: return halo4Release;
        case HaloGamesEnum.HALO_REACH: return haloReachRelease;
        case HaloGamesEnum.HALO3: return halo3Release;
        case HaloGamesEnum.HALO2: return halo2Release;
        case HaloGamesEnum.HALO_CE: return haloCERelease;
        default: return xboxRealease;
    }
}

function updateTimer() {
    const since = getSinceDateFromHaloGame(currentGame);
    const times = calculateTimeSince(since);
    document.getElementById("days").innerText = times.days.toString(),
    document.getElementById("hours").innerText = times.hours.toString(),
    document.getElementById("minutes").innerText = times.minutes.toString(),
    document.getElementById("seconds").innerText = times.seconds.toString();
}

setInterval(updateTimer, 100);


/* Btn Events */
function gameBtnOnClick(event: Event) {
    const btn = event.target as HTMLButtonElement;
    const game = btn.dataset['game'];
    currentGame = gameToHaloGamesEnum(game);
}

const gamesBtn = document.getElementsByClassName('games__btn');

Array.from(gamesBtn, (gameBtn) => {
    gameBtn.addEventListener('click', gameBtnOnClick);
});
