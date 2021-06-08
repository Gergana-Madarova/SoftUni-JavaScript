function calorieObject(input) {
    const foodCalorie = {};

    for (let index = 0; index < input.length - 1; index += 2) {
        let [name] = input[index].split(', ');
        //let [calorie] = input[index + 1];
        foodCalorie[name] = Number(input[index + 1]);
    }

    console.log(foodCalorie);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);