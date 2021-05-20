function numberInRange(input) {
    number = Number(input);

    if (number <= 100 && number >= -100 && number != 0) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

numberInRange(345);