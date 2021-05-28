function sumFirstLast(input) {
    let sum = Number(input[0]) + Number(input[input.length - 1]);

    return sum;
    //return Number(input.pop()) + Number(input.shift());
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));