function townPopulation(input) {
    const towns = {
    };

    for (let index = 0; index < input.length; index++) {
        let [name, population] = input[index].split(" <-> ");
        population = Number(population);

        if (towns[name] != undefined) {
            towns[name] += population;
        }
        else {
            towns[name] = population;
        }
    }

    for (const key in towns) {
        if (Object.hasOwnProperty.call(towns, key)) {
            console.log(`${key} : ${towns[key]}`);
        }
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);