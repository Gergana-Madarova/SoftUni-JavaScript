function carFactory(input) {
    let engine = {};

    if (input.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        };
    } else if (input.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        };
    } else if (input.power <= 200) {
        engine = {
            power: 200,
            volume: 3500
        };
    }

    let wheels = [];
    wheels.length = 4;
    if (input.wheelsize % 2 == 0) {
        wheels = wheels.fill((input.wheelsize - 1), 0, 4);
    } else {
        wheels = wheels.fill(input.wheelsize, 0, 4)
    }
    // fill with 0 from position 2 until position 4
    //console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0]

    let car = {
        model: input.model,
        engine: engine,
        carriage: {
            type: input.carriage,
            color: input.color
        },
        wheels: wheels
    };

    return car;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));