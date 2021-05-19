function toyShop(input) {
    let vacantionPrice = Number(input[0]);
    let countPuzzles = Number(input[1]);
    let countDolls = Number(input[2]);
    let countBears = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);

    let puzzlesPrice = countPuzzles * 2.60;
    let dollsPrice = countDolls * 3;
    let bearsPrice = countBears * 4.10;
    let minionsPrice = countMinions * 8.20;
    let trucksPrice = countTrucks * 2;

    let priceToys = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let toys = countPuzzles + countDolls + countBears + countMinions + countTrucks;

    let forRent = 0.0;
    let fin = 0.0;

    if (toys >= 50) {
        let priceToysFin = priceToys - (0.25 * priceToys);   //отстъпка 25%
        forRent = 0.1 * priceToysFin;
        fin = priceToysFin - forRent;
    } else {
        forRent = 0.1 * priceToys;
        fin = priceToys - forRent;
    }

    if (vacantionPrice <= fin) {
        let lackOfMoney = fin - vacantionPrice;
        console.log(`Yes! ${lackOfMoney.toFixed(2)} lv left.`);
    } else {
        let lackOfMoney = vacantionPrice - fin;
        console.log(`Not enough money! ${lackOfMoney.toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"])