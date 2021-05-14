function yardGreening(input) {
    let m = Number(input);

    let finalPriceWithoutDiscount = m * 7.61;
    let discount = 0.18 * finalPriceWithoutDiscount;
    let finalPrice = finalPriceWithoutDiscount - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening("550");