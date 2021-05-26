function fruit(fruit, weightInGr, moneyForKg) {
    let weightInKg = +weightInGr / 1000
    let money = weightInKg * +moneyForKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);