function metricConverter(input) {
    let num = Number(input[0]);
    let enteredUnit = input[1];
    let desiredUnit = input[2];

    let outPut = "";
    let numM;

    if (enteredUnit == "cm") {
        numM = num / 100;
    }
    else if (enteredUnit == "mm") {
        numM = num / 1000;
    }
    else {
        numM = num;
    }

    if (desiredUnit == "cm") {
        outPut = `${(numM * 100).toFixed(3)}`;
    }
    else if (desiredUnit == "mm") {
        outPut = `${(numM * 1000).toFixed(3)}`;
    }
    else {
        outPut = `${numM.toFixed(3)}`;
    }

    console.log(outPut);
}

metricConverter(["12", "mm", "m"]);
metricConverter(["150", "m", "cm"]);
metricConverter(["45", "cm", "mm"]);
