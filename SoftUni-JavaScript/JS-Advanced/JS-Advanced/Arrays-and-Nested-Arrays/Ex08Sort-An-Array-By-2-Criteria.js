function sortArrayBy2Criteria(input) {
    let [...array] = input;
    array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(array.join("\n"));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);