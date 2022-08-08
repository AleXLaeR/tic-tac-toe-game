const typed = new Typed(
    ".typing", {
        strings: ['', 'Tic', 'Tac', 'Toe', 'Tic, Tac, Toe !'],
        typeSpeed: 70,
        BackSpeed: 60,
        loop: true
    });

let editedPlayerId = 0;
let currentPlayerToMoveId = 0;
const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
]
const tileSetData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const editBtnPlayerOne = document.getElementById('edit-btn-player-1');
const editBtnPlayerTwo = document.getElementById('edit-btn-player-2');

editBtnPlayerOne.addEventListener('click', openPlayerConfigOverlay);
editBtnPlayerTwo.addEventListener('click', openPlayerConfigOverlay);

const cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click', closePlayerConfigOverlay);

const backdropElement = document.getElementById('backdrop');
backdropElement.addEventListener('click', closePlayerConfigOverlay);

const formElement = document.querySelector('form');
formElement.addEventListener('submit', savePlayerConfig);

const gameAreaElement = document.getElementById('active-game');
const errorsOutputElement = document.getElementById('config-errors');

const startGameBtn = document.getElementById('start-game-btn');
startGameBtn.addEventListener('click', onNewGameStart);

for (const tile of document.querySelectorAll('#game-board li')) {
    tile.addEventListener('click', onTileSelection);
}

const newGameBtn = document.getElementById('bt')
