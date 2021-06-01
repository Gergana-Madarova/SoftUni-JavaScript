function magicMatrices(array) {
    let sumRow = 0;
    let sumCol = 0;
    let isMagic = true;

    for (let i = 0; i < array.length - 1; i++) {
        sumRow = array[i].reduce((a, b) => a + b, 0);
        if (sumRow !== array[i + 1].reduce((a, b) => a + b, 0)) {
            isMagic = false;
            return isMagic;
        }
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            sumCol += array[i][j];
        }

        if (sumRow !== sumCol) {
            isMagic = false;
            break;
        }

        sumCol = 0;
    }

    return isMagic;
}

console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));