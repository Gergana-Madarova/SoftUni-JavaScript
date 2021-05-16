function birthdayParty(input) {
    let rent = Number(input[0]);

    let cake = 0.2 * rent;
    let drinks = cake - 0.45 * cake;
    let anime = rent / 3;

    let sum = cake + drinks + anime + rent;

    console.log(sum);
}

birthdayParty(["2250"]);