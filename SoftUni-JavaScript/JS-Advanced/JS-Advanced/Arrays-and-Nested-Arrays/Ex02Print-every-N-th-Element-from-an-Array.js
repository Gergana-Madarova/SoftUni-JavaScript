function everyNElement(array, num) {
    let step = Number(num);
    const arrOutput = [array[0]];

    for (let index = step; index < array.length; index += step) {
        arrOutput.push(array[index]);
    }

    return arrOutput;
}

console.log(everyNElement(['5', '20', '31', '4', '20'], 2));
console.log(everyNElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(everyNElement(['1', '2', '3', '4', '5'], 6));