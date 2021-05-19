function bonusScore(input) {
    let countScore = Number(input);
    let bonus = 0;
    let totalScore = 0.0;

    if (countScore <= 100) {
        bonus += 5;
    }
    else if (countScore > 1000) {
        bonus += (0.1 * countScore);
    }
    else {
        bonus += +(0.2 * countScore);
    }

    if (countScore % 2 == 0) {
        bonus += 1;
    }
    else if (countScore % 10 == 5) {
        bonus += 2;
    }

    totalScore = countScore + bonus;

    console.log(bonus);
    console.log(totalScore);
}

bonusScore("20");
bonusScore("175");
bonusScore("15875");