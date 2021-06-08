function heroicInventory(input) {
    let result = [];

    for (const iterator of input) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        //	If there are any items in the input,
        // the variable will be set to the split version of them. 
        //If not, it will just be set to an empty array.
        items = items ? items.split(', ') : [];

        let hero = {
            name: name,
            level: level,
            items: items
        };

        result.push(hero);
    }

    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));