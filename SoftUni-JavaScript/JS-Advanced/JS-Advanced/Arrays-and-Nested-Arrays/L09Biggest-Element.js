function biggestElement(input) {
    //finds the biggest element inside a matrix
    const array = input.slice();
    let result = Math.max(...[].concat(...array));

    return result;
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));