function sumOfNumbers (n, m) {
    let num1 = Number(n);
    //let num1 = +n;
    let num2 = Number(m);
    let sum = 0;

    for (let index = num1; index <= num2; index++) {
        sum += index;       
    }

    return sum;
}

console.log(sumOfNumbers('1', '5' ));
console.log(sumOfNumbers('-8', '20'));