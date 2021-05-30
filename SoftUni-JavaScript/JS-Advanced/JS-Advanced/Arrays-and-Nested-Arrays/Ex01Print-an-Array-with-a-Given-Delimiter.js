function printArrayWithDelimiter(array, delimiter) {
    let arr = array.slice().join(`${delimiter}`);

    console.log(arr);
}

printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');