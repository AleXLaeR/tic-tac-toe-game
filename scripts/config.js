function openPlayerConfigOverlay(event) {
    const modalElement = document.getElementById('config-overlay');
    modalElement.classList.remove('hidden');

    backdropElement.classList.remove('hidden');
    editedPlayerId = +event.target.dataset.playerid;
}

function closePlayerConfigOverlay() {
    const modalElement = document.getElementById('config-overlay');
    modalElement.classList.add('hidden');

    backdropElement.classList.add('hidden');
    formElement.firstElementChild.classList.remove('error');

    errorsOutputElement.textContent = '';
    document.getElementById('player-name').value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('player-name').trim();

    if (enteredPlayerName) {
        onPlayerNameChange(enteredPlayerName);
        return;
    }

    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name !';
}

function onPlayerNameChange(newName) {
    const updatedPlayerDataElement = document.getElementById(
        `player-${editedPlayerId}-data`
    );
    updatedPlayerDataElement.children[1].textContent =
        players[editedPlayerId - 1].name = newName;

    closePlayerConfigOverlay();
}
