function equalNeighbors(input) {
    let sizeOfRow = input.length;
    let pairsEqualNeighbor = 0;

    for (let i = 0; i < sizeOfRow; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (i !== sizeOfRow - 1 && input[i][j] === input[i + 1][j]) {
                pairsEqualNeighbor += 1;
            }

            if (j !== input[i].length - 1 && input[i][j] === input[i][j + 1]) {
                pairsEqualNeighbor += 1;
            }
        }
    }

    return pairsEqualNeighbor;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));

console.log(equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]));