function openPlayerConfig() {
    playerConfigOverlay.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorOutput.textContent = "";
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
}
