function diagonalSums(array) {
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let i = 0; i < array.length; i++) {
        let index2 = array.length - 1 - i;
        sumMainDiagonal += array[i][i];
        sumSecondaryDiagonal += array[i][index2];
    }

    return sumMainDiagonal + " " + sumSecondaryDiagonal;
}

console.log(diagonalSums([[20, 40], [10, 60]]));
console.log(diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));
