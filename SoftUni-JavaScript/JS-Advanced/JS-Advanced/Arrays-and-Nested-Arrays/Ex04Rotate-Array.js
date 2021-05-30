function rotateArray(arr, number) {
    let num = Number(number);
    if (num > arr.length) {
        num = parseInt(num / arr.length);
    }

    const output = arr.slice(arr.length - num).concat(arr.slice(0, arr.length - num));

    return output.join(" ");
}

console.log(rotateArray(['1', '2', '3', '4'], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));