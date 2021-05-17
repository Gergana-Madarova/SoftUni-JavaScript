function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let bananes = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberry = Number(input[4]);

    let orangesPrice = oranges * ((strawberryPrice / 2) - 0.4 * (strawberryPrice / 2));
    let bananesPrice = bananes * ((strawberryPrice / 2) - 0.8 * (strawberryPrice / 2));
    let money = strawberry * strawberryPrice + raspberries * (strawberryPrice / 2) + orangesPrice + bananesPrice;

    console.log(money);
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);