function rectangle(num1, num2, color) {
    let col = "";
    for (let index = 0; index < color.length; index++) {
        if (index == 0) {
            col = color[0].toUpperCase();
        } else {
            col += color[index];
        }
    }

    let rect = {
        width: Number(num1),
        height: Number(num2),
        color: col,

        calcArea() {
            return this.width * this.height
        }
    }

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
