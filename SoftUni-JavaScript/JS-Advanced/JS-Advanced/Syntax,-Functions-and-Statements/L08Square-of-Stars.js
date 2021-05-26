function squareOfStars(num = 5) {
    for (let index = 1; index <= +num; index++) {
        console.log('* '.repeat(+num));
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();