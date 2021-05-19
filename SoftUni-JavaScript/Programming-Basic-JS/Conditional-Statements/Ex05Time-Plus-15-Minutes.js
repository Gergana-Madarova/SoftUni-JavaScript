function add15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let outPut = "";

    if (minutes < 45) {
        minutes += 15;
        outPut = `${hour}:${minutes}`;
    }
    else if (minutes <= 59 && hour < 23) {
        hour++;
        minutes = (minutes + 15) - 60;
        if (minutes < 10) {
            outPut = `${hour}:0${minutes}`;
        }
        else {
            outPut = `${hour}:${minutes}`;
        }
    }
    else if (minutes <= 59 && hour == 23) {
        hour = 0;
        minutes = (minutes + 15) - 60;
        if (minutes < 10) {
            outPut = `${hour}:0${minutes}`;
        }
        else {
            outPut = `${hour}:${minutes}`;
        }
    }

    console.log(outPut);
}

add15Minutes([1, 46]);
add15Minutes([0, 01]);
add15Minutes([23, 59]);
add15Minutes([11, 08]);
add15Minutes([12, 49]);