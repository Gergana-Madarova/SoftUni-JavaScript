function isFilming(input) {
    let budget = Number(input[0]);
    let crewCounts = Number(input[1]);
    let clothingForOne = Number(input[2]);

    let decor = budget * 0.1;
    let costs = 0.0;
    let outPut = "";

    if (crewCounts > 150) {
        clothingForOne += -(0.1 * clothingForOne);
    }

    costs = decor + clothingForOne * crewCounts;

    if (costs > budget) {
        let money = costs - budget;
        outPut = `Not enough money!\nWingard needs ${money.toFixed(2)} leva more.`;
    }
    else {
        let money = budget - costs;
        outPut = `Action!\nWingard starts filming with ${money.toFixed(2)} leva left.`;
    }

    console.log(outPut);
}

isFilming(["20000", "120", "55.5"]);

