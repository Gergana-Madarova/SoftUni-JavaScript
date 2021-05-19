function sumSeconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let total = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(total / 60);
    let seconds = total % 60;

    let output = '';

    if (seconds < 10) {
        output = `${minutes}:0${seconds}`;
    }
    else {
        output = `${minutes}:${seconds}`;
    }

    console.log(output);
}

sumSeconds(["50", "50", "49"]);