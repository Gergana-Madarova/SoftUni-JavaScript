function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    let commission = 0.0;
    let percent = 0.0;
    let err = false;

    switch (city) {
        case "Sofia":
            {
                if (sales > 10000) {
                    percent = 0.12;
                }
                else if (sales > 1000) {
                    percent = 0.08;
                }
                else if (sales > 500) {
                    percent = 0.07;
                }
                else if (sales > 0) {
                    percent = 0.05;
                }
            }
            break;
        case "Varna":
            {
                if (sales > 10000) {
                    percent = 0.13;
                }
                else if (sales > 1000) {
                    percent = 0.10;
                }
                else if (sales > 500) {
                    percent = 0.075;
                }
                else if (sales > 0) {
                    percent = 0.045;
                }
            }
            break;
        case "Plovdiv":
            {
                if (sales > 10000) {
                    percent = 0.145;
                }
                else if (sales > 1000) {
                    percent = 0.12;
                }
                else if (sales > 500) {
                    percent = 0.08;
                }
                else if (sales > 0) {
                    percent = 0.055;
                }
            }
            break;
        default:
            err = true;
            break;
    }

    if (sales >= 0 && err == false) {
        commission = percent * sales;
        console.log(`${commission.toFixed(2)}`);
    }
    else {
        console.log("error");
    }
}