function passwordGuess(pass) {
    let a = "s3cr3t!P@ssw0rd";

    if (pass == a) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess("s3cr3t!P@ssw0rd");