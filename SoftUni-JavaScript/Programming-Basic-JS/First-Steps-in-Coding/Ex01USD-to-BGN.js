function usdToBgn(input) {
    let usd = Number(input);

    let bgn = usd * 1.79549;

    console.log(bgn.toFixed(2));
}

usdToBgn("22");