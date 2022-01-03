const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let edittedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: "",
        symbol: "X",
    },
    {
        name: "",
        symbol: "O",
    },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.getElementById("player-form");
const formInputElement = document.getElementById("player-name");
const errorOutput = document.getElementById("config-error");
const gameArea = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");

const editPlayer1Button = document.getElementById("edit-player-1");
const editPlayer2Button = document.getElementById("edit-player-2");
const cancelConfigButton = document.getElementById("cancel-config-button");
const startNewGameButton = document.getElementById("start-game-button");
/* const gameFieldElements = document.querySelectorAll("#game-board li"); */
const gameBoard = document.getElementById("game-board");

editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);

cancelConfigButton.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameButton.addEventListener("click", startNewGame);

/* for (const gameField of gameFieldElements) {
    gameField.addEventListener("click", selectGameField);
} */

gameBoard.addEventListener("click", selectGameField);
