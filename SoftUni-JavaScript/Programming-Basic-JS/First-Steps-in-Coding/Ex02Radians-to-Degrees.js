function radiansToDegrees(input) {
    let rad = Number(input.shift());
    //let rad = Number(input[0]);

    let deg = rad * 180 / Math.PI;

    console.log(deg.toFixed(0));
}

radiansToDegrees(["3.1416"]);