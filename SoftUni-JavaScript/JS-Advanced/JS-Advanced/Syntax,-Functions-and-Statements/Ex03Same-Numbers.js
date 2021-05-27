function sameNumbers(number) {
    let numberAsString = String(number);
    let sum = numberAsString > 0 ? Number(numberAsString[0]) : 0;
    let IsTrue = true;

    for (let index = 1; index < numberAsString.length; index++) {
        sum += Number(numberAsString[index]);
        if (numberAsString[index] != numberAsString[index - 1]) {
            IsTrue = false;
        }
    }

    console.log(IsTrue);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);