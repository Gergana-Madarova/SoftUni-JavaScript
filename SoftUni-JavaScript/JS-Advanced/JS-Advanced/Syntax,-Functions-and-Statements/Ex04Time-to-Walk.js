function timeToWalk(num1, num2, num3) {
    let numOfStep = Number(num1);
    let footprintLengthInM = Number(num2);
    let studentSpeed = Number(num3);

    let timeInSec = footprintLengthInM * numOfStep / (studentSpeed * 1000 / 3600);
    let timeRestInSec = Math.floor(numOfStep * footprintLengthInM / 500) * 60;
    timeInSec += timeRestInSec;

    let hours = Math.floor(timeInSec / 3600);
    let minutes = Math.floor((timeInSec % 3600) / 60);
    let seconds = Math.ceil((timeInSec % 3600) % 60);

    console.log(`${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);