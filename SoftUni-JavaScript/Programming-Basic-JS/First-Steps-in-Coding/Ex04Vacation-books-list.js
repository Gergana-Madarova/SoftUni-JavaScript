function vacationBook(input) {
    let pages = Number(input[0]);
    let pagesPourHour = Number(input[1]);
    let days = Number(input[2]);

    let result = (pages / pagesPourHour) / days;

    console.log(result);
}

vacationBook(["212", "20", "2"]);