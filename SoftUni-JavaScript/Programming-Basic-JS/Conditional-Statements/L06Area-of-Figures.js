function area(shape, a, b) {
    if (shape == "square") {
        var area = a * a;
    } else if (shape == "rectangle") {
        var area = a * b;
    } else if (shape == "circle") {
        let r = Number(a);
        var area = r * r * Math.PI;
    } else if (shape == "triangle") {
        let ha = Number(b);
        var area = (a * ha) / 2;
    }

    console.log(`${area.toFixed(3)}`);
}

area("square", "5");
area("rectangle", 7, 2.5);
area("circle", 6);
area("triangle", 4.5, 20);