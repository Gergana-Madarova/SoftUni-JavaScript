function circleArea (arg) {
    if (typeof (arg) == 'number') {
        let area = Math.pow(arg, 2) * Math.PI;
        //let area = arg ** 2 * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`);
    }
}

circleArea(5);
circleArea('name');