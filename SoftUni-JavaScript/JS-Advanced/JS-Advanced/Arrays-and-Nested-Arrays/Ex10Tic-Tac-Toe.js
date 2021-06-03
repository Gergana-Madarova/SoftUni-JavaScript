function ticTacToe(array) {
    const dishboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let isFreePosition = true;
    let turn = 0;
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        //const position = array[i];
        let [...position] = array[i].split(' ').map(num => Number(num));

        if (checkPosition(position)) {
            //1-st player
            if (turn % 2 === 0) {
                counter = markDishboard(counter, "X", position);
            }

            //2-nd player
            if (turn % 2 !== 0) {
                counter = markDishboard(counter, "O", position);
            }
            turn += 1;
        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if (counter >= 5) {
            let winner = winnerFromGame(dishboard);

            if (winner.length !== 0) {
                console.log(`Player ${winner} wins!`);
                break;
            }

            if (counter === 9 && winner.length == 0) {
                console.log("The game ended! Nobody wins :(");
                break;
            }
        }
    }

    function checkPosition(coordinates) {
        if (dishboard[coordinates[0]][coordinates[1]] === false) {
            return isFreePosition = true;
        } else {
            return isFreePosition = false;
        }
    }

    function markDishboard(count, mark, coordinates) {
        dishboard[coordinates[0]][coordinates[1]] = mark;
        return count += 1;
    }

    function winnerFromGame(dishboard) {
        let winPlayer = '';

        for (let row = 0; row < dishboard.length; row++) {
            //check vertical
            for (let col = 0; col < dishboard.length; col++) {
                if (dishboard[0][col] === dishboard[1][col] && dishboard[1][col] === dishboard[2][col]) {
                    winPlayer = dishboard[row][0];
                    return winPlayer;
                }
            }

            // check horizontal
            if (dishboard[row].every(x => x === 'X')) {
                winPlayer = 'X';
                return winPlayer;
            } else if (dishboard[row].every(x => x === 'O')) {
                winPlayer = 'O';
                return winPlayer;
            }
        }

         //checking diagonal
        if (dishboard[0][0] === dishboard[1][1] && dishboard[2][2] === dishboard[1][1]) {
            winPlayer = dishboard[1][1];
        } else if (dishboard[0][2] === dishboard[1][1] && dishboard[2][0] === dishboard[1][1]) {
            winPlayer = dishboard[1][1];
        }

        return winPlayer;
    }

    for (let row = 0; row < dishboard.length; row++) {
        console.log(dishboard[row].join(`\t`));
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
    
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);