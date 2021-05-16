function charityCampaign(input) {
    let days = Number(input[0]);
    let confectioner = Number(input[1]);
    let cake = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    let totalMoney = days * confectioner * (cake * 45 + waffles * 5.80 + pancakes * 3.20);
    let money = totalMoney - (totalMoney / 8);

    console.log(money);
}

charityCampaign(["23", "8", "14", "30", "16"]);