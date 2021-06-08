function townsToJSON(input) {
    let result = [];
    let isFirstLine = true;

    for (const iterator of input) {
        let [empty, town, latitude, longitude] = iterator.split(/\s*\|\s*/);

        if (isFirstLine) {
            isFirstLine = false;
            continue;
        }

        let townObj = {
            Town: town,
            Latitude: latitude = Number(Number(latitude).toFixed(2)),
            Longitude:  longitude = Number(Number(longitude).toFixed(2))
        };

        result.push(townObj);
    }

    return JSON.stringify(result);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));