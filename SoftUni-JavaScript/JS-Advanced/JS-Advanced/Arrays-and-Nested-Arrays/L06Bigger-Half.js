function biggerHalf(input) {
    let [...array] = input;
    let resultLength = Math.floor(array.length / 2);
    let result = array.sort((a, b) => a - b).slice(resultLength);;

    return result;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));