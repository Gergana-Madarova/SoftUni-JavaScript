function petShop(input) {
    let countOfDogs = Number(input.shift());
    let countOfOtherAnimals = Number(input.shift());
    let sum = countOfDogs * 2.50 + countOfOtherAnimals * 4;
    console.log(`${sum} lv.`);
}

petShop(["5", "4"]);