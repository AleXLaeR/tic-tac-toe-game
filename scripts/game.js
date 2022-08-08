function onNewGameStart() {
    if (!players[0].name || !players[1].name) {
        alert('Please set custom names for both players!');
        return;
    }
    document.getElementById('active-player-name')
        .textContent = players[currentPlayerToMoveId % 2].name;

    gameAreaElement.classList.remove('hidden');
}

function onTileSelection(event) {
    const selectedTilerow = event.target.dataset.tilerow;
    const selectedTilecol = event.target.dataset.tilecol;

    console.log(currentPlayerToMoveId);
    const currentPlayerName = players[(currentPlayerToMoveId + 1) % 2].name;

    if (!event.target.textContent || currentPlayerToMoveId === 0) {
        event.target.textContent = players[currentPlayerToMoveId++ % 2].symbol;
        event.target.classList.add('disabled');

        tileSetData[selectedTilerow][selectedTilecol] =
            (currentPlayerToMoveId % 2 + 1).toString();

        document.getElementById('active-player-name')
            .textContent = currentPlayerName;
    }

    if (checkWinRound()) {
        document.getElementById('winner-name').textContent
            = currentPlayerName;
        document.getElementById('game-over').classList
            .remove('hidden');

        for (const tile of document.querySelectorAll('#game-board li')) {
            tile.classList.add('disabled');
        }
    }
}

function checkWinRound() {
    if (tileSetData[0][0] > 0
        && tileSetData[0][0] === tileSetData[0][1]
        && tileSetData[0][1] === tileSetData[0][2]) {
        return true;
    }
    if (tileSetData[0][0] > 0
        && tileSetData[0][0] === tileSetData[1][0]
        && tileSetData[1][0] === tileSetData[2][0]) {
        return true;
    }
    if (tileSetData[0][2] > 0
        && tileSetData[0][2] === tileSetData[1][2]
        && tileSetData[1][2] === tileSetData[2][2]) {
        return true;
    }
    if (tileSetData[2][0] > 0
        && tileSetData[2][0] === tileSetData[2][1]
        && tileSetData[2][1] === tileSetData[2][2]) {
        return true;
    }
    if (tileSetData[0][0] > 0
        && tileSetData[0][0] === tileSetData[1][1]
        && tileSetData[1][1] === tileSetData[2][2]) {
        return true;
    }
    if (tileSetData[0][2] > 0
        && tileSetData[0][2] === tileSetData[1][1]
        && tileSetData[1][1] === tileSetData[2][0]) {
        return true;
    }
    if (tileSetData[0][1] > 0
        && tileSetData[0][1] === tileSetData[1][1]
        && tileSetData[1][1] === tileSetData[2][1]) {
        return true;
    }
    if (tileSetData[1][0] > 0
        && tileSetData[1][0] === tileSetData[1][1]
        && tileSetData[1][1] === tileSetData[1][2]) {
        return true;
    }
    return false;
}

function onGameEnd() {
    
}
