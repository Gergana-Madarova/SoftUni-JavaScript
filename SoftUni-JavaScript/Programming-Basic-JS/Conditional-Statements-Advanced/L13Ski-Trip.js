function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let price = 0.0;

    switch (room) {
        case "room for one person":
            {
                price = (days - 1) * 18;
            }
            break;
        case "apartment":
            {
                price = (days - 1) * 25;
                if (days < 10 && days >= 0) {
                    price = price - 0.30 * price;
                }
                else if (days >= 10 && days <= 15) {
                    price = price - 0.35 * price;
                }
                else if (days > 15 && days <= 365) {
                    price = price - 0.50 * price;
                }
            }
            break;
        case "president apartment":
            {
                price = (days - 1) * 35;
                if (days < 10 && days >= 0) {
                    price = price - 0.10 * price;
                }
                else if (days >= 10 && days <= 15) {
                    price = price - 0.15 * price;
                }
                else if (days > 15 && days <= 365) {
                    price = price - 0.20 * price;
                }
            }
            break;
        default:
            console.log("Choose room");
            break;
    }

    if (rating == "positive") {
        price = price + 0.25 * price;
    }
    else if (rating == "negative") {
        price = price - 0.10 * price;
    }

    console.log(`${price.toFixed(2)}`);
}