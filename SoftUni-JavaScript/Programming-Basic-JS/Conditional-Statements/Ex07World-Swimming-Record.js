function isWorldSwimmingRecord(input) {
    let recordSec = Number(input[0]);
    let distanceМ = Number(input[1]);
    let timeInSecForM = Number(input[2]);

    let output = "";
    let timeIvan = 0.0;

    if (distanceМ < 15) {
        timeIvan = distanceМ * timeInSecForM;
    }
    else {
        //резултатът се закръглява надолу до най-близкото цяло число.
        let delayCounts = Math.floor(distanceМ / 15);
        timeIvan = (distanceМ * timeInSecForM) + (delayCounts * 12.5);
    }

    if (timeIvan < recordSec) {
        output = `Yes, he succeeded! The new world record is ${timeIvan.toFixed(2)} seconds.`;
    }
    else {
        let missingSeconds = timeIvan - recordSec;
        output = `No, he failed! He was ${missingSeconds.toFixed(2)} seconds slower.`;
    }

    console.log(output);
}

isWorldSwimmingRecord(["10464", "1500", "20"]);