function openPlayerConfig(event) {
    edittedPlayer = +event.target.dataset.playerid;
    playerConfigOverlay.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorOutput.textContent = "";
    formInputElement.value = "";
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error");
        errorOutput.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPlayerData = document.getElementById(
        "player-" + edittedPlayer + "-data"
    );
    updatedPlayerData.children[1].textContent = enteredPlayerName;

    players[edittedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}
