function stringLength (a, b, c) {
    let word1 = a;
    let word2 = b;
    let word3 = c;

    let sumLength = word1.length + word2.length + word3.length;
    let averageLength = sumLength / 3;

    console.log(sumLength);
    console.log(Math.floor(averageLength));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');