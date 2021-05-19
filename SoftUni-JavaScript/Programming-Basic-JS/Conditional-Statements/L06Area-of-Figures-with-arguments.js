function area(input) {
    let shape = input[0];

    if (shape == "square") {
        let a = Number(input[1]);
        var area = a * a;
    } else if (shape == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        var area = a * b;
    } else if (shape == "circle") {
        let r = Number(input[1]);
        var area = r * r * Math.PI;
    } else if (shape == "triangle") {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        var area = (a * ha) / 2;
    }

    console.log(`${area.toFixed(3)}`);
}

area(["square", "5"]);
area(["rectangle", 7, 2.5]);
area(["circle", 6]);
area(["triangle", 4.5, 20]);