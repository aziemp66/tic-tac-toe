function openPlayerConfig() {
    playerConfigOverlay.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = "none";
    backdropElement.style.display = "none";
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername");
    console.log(enteredPlayerName);
}
