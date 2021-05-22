function evenPowersOf2(num) {
    for (let i = 0; i <= +num; i += 2) {
        //console.log(Math.pow(2, i));
        console.log(2 ** i);
    }
}

evenPowersOf2(4);