function processOddPositions(input) {
    //the elements at odd positions from the array, doubled and in reverse order.
    let array = input.slice();
    let result = array.filter((arr, index) => index % 2 != 0)
        .map(n => n * 2)
        .reverse()
        .join(' ');;

    return result;
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));