function smallestTwoNumbers(input) {
    let array = input.slice();
    let result = array.sort((a, b) => a - b).slice().slice(0, 2).join(' ');

    return result;
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));