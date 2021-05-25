function cleverLili(input) {
    let age = Number(input[0]);
    let priceLaundry = Number(input[1]);
    let priceToys = Number(input[2]);

    let money = 0.0;
    let sum = 0.0;
    let countToys = 0;
    let countM = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            countToys++;
        }
        else {
            money += 10;
            sum = (sum + money);
            countM++;
        }
    }

    sum = (sum - countM) + (countToys * priceToys);

    console.log(sum >= priceLaundry ? `Yes! ${(sum - priceLaundry).toFixed(2)}` : `No! ${(priceLaundry - sum).toFixed(2)}`);
}

cleverLili(["10", "170", "6"]);
cleverLili(["21", "1570.98", "3"]);