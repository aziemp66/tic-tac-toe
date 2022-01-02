const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const editPlayer1Button = document.getElementById("edit-player-1");
const editPlayer2Button = document.getElementById("edit-player-2");
const cancelConfigButton = document.getElementById("cancel-config-button");

editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);

cancelConfigButton.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);
