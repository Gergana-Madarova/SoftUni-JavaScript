function speedInfo(input) {
    let speed = Number(input);
    let outPut = "";

    if (speed <= 10 && speed > 0) {
        outPut = "slow";
    }
    else if (speed <= 50 && speed > 0) {
        outPut = "average";
    }
    else if (speed <= 150 && speed > 0) {
        outPut = "fast";
    }
    else if (speed <= 1000 && speed > 0) {
        outPut = "ultra fast";
    }
    else if (speed > 1000 && speed > 0) {
        outPut = "extremely fast";
    }

    console.log(outPut);
}

speedInfo("8");
speedInfo("49.5");
speedInfo("126");
speedInfo("160");