function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];
    let output = "";

    switch (gender) {
        case "f":
            if (age >= 16) {
                output = "Ms.";
            }
            else
                output = "Miss";
            break;

        case "m":
            if (age >= 16) {
                output = "Mr.";
            }
            else
                output = "Master";
            break;
    }

    console.log(output);
}

personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);