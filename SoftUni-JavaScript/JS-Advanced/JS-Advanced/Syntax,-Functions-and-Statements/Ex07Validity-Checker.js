function validityChecker(x1, y1, x2, y2) {
    isValidPrint(distance(x1, y1), x1, y1, 0, 0);
    isValidPrint(distance(undefined, undefined, x2, y2), x2, y2, 0, 0);
    isValidPrint(distance(x1, y1, x2, y2), x1, y1, x2, y2);

    function distance(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
        d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (Number.isInteger(d)) {
            return true;
        } else {
            return false;
        }
    }

    function isValidPrint(isValid, x1, y1, x2, y2) {
        if (isValid) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
