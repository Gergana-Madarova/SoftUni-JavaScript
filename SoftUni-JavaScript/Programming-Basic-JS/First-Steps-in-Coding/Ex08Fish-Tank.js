function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let h = Number(input[2]);
    let percentage = Number(input[3]);

    let V = (length * width * h) * 0.001;
    let Vl = V * (1 - (percentage / 100));

    console.log(Vl);
}

fishTank(["85", "75", "47", "17"]);
