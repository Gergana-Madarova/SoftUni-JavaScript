function depositCalculator(input) {
    let deposit = Number(input.shift());
    let period = Number(input.shift());
    let annualInterest = Number(input.shift());
    //let annualInterest = Number(input[2]);

    let sum = deposit + period * ((deposit * annualInterest * 0.01) / 12);

    console.log(sum.toFixed(2));
}

depositCalculator(["200", "3", "5.7"]);