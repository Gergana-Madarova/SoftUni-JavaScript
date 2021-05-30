function diagonalSums(input) {
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let sizeOfsquareMatrix = input.length;

    for (let i = 0; i < sizeOfsquareMatrix; i++) {
        let row = input[i];

        for (let j = 0; j < sizeOfsquareMatrix; j++) {
            if (i == j) {
                sumMainDiagonal += row[j];
            }

            if (i == sizeOfsquareMatrix - j - 1) {
                sumSecondaryDiagonal += row[j];
            }
        }
    }

    return sumMainDiagonal + " " + sumSecondaryDiagonal;
}

console.log(diagonalSums([[20, 40], [10, 60]]));
console.log(diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));
