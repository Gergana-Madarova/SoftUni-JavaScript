function wordsUppercase(input) {
    const regex = /\W+/g;
    let array = input.split(regex).filter(function (x) { return x != ""; });
    let output = "";

    array.forEach(element => {
        output += `${element.toUpperCase()}, `;
    });

    console.log(output.slice(0, -2));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
