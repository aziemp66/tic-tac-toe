function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("Please set custom player names for both players!");
        return;
    }
    activePlayerName.textContent = players[activePlayer].name;
    gameArea.style.display = "block";
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if (event.target.tagName !== "LI") {
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert("Please select an empty field!");
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    console.log(winnerId);

    currentRound++;
    switchPlayer();
}

function checkForGameOver() {
    //Checking Rows
    for (let index = 0; index < 3; index++) {
        if (
            gameData[index][0] > 0 &&
            gameData[index][0] === gameData[index][1] &&
            gameData[index][1] === gameData[index][2]
        ) {
            return gameData[index][0];
        }
    }
    //Checking Collumns
    for (let index = 0; index < 3; index++) {
        if (
            gameData[0][index] > 0 &&
            gameData[0][index] === gameData[1][index] &&
            gameData[1][index] === gameData[2][index]
        ) {
            return gameData[0][index];
        }
    }
    //Check Diagonal : Top Left to Bottom Right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }
    //CHeck Diagonal : Bottom left to Top Right
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1; //Draw
    }

    return 0; //Continue Round
}
