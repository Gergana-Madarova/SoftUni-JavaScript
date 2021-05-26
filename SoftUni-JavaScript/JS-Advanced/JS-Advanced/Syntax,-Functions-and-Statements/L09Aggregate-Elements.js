function aggregateElements(array) {
    let sum = 0;
    let sumOfInverseValue = 0;
    let concat = "";

    for (let index = 0; index < array.length; index++) {
        sum += +array[index];
        sumOfInverseValue += 1 / +array[index];
        concat += String(array[index]);
    }

    console.log(sum);
    console.log(sumOfInverseValue);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements(["1", "2", 3]);
aggregateElements([2, 4, 8, 16]);