function sortingNumbers(input) {
    let [...array] = input;
    array.sort((a, b) => a - b);

    for (let index = 0; index < array.length; index += 2) {
        array.splice(1 + index, 0, array.pop(array[array.length - 1]));
    }

    return array;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));