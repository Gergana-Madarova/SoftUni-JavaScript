function negativeOrPositiveNumbers(input) {
    const resultNegative = [];
    const resultPositive = [];

    for (let index = 0; index < input.length; index++) {
        if (input[index] < 0) {
            resultNegative.push(input[index]);
        } else {
            resultPositive.push(input[index]);
        }
    }

    const result = resultNegative.reverse().concat(resultPositive);

    return result;
}

console.log(negativeOrPositiveNumbers([7, -2, 8, 9]));
console.log(negativeOrPositiveNumbers([3, -2, 0, -1]));