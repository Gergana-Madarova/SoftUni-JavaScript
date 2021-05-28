function evenPositionElements(array) {
    let output = "";

    for (let index = 0; index < array.length; index += 2) {
        output += `${array[index]} `;
    }

    return output;
}

console.log(evenPositionElements(['20', '30', '40', '50', '60']));
console.log(evenPositionElements(['5', '10']));