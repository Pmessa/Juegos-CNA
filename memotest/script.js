const gameContainer = document.querySelector('.memory-game');
const scorePlayer1Display = document.getElementById('score-player1');
const scorePlayer2Display = document.getElementById('score-player2');
const player1NameDisplay = document.getElementById('player1-name-display');
const player2NameDisplay = document.getElementById('player2-name-display');
const currentPlayerNameDisplay = document.getElementById('current-player-name');
const resetButton = document.getElementById('reset-button');
const startGameButton = document.getElementById('start-game-button');
const playerNamesInput = document.querySelector('.player-names-input');
const player1Input = document.getElementById('player1-name');
const player2Input = document.getElementById('player2-name');

let cards = [];
let flippedCards = [];
let matchedCards = [];
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let canFlip = true;
let player1Name = 'Jugador 1'; // Valores por defecto
let player2Name = 'Jugador 2';

// Array de pares de iconos
const cardPairs = [
    'fa-fire', 'fa-fire',
    'fa-shield-alt', 'fa-shield-alt',
    'fa-exclamation-triangle', 'fa-exclamation-triangle',
    'fa-first-aid', 'fa-first-aid',
    'fa-house-damage', 'fa-house-damage',
    'fa-car-crash', 'fa-car-crash'
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(iconClass) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"><i class="fas fa-question"></i></div>
            <div class="card-back"><i class="fas ${iconClass}"></i></div>
        </div>
    `;
    card.addEventListener('click', flipCard);
    return card;
}

function startGame() {
    player1Name = player1Input.value.trim() || 'Jugador 1';
    player2Name = player2Input.value.trim() || 'Jugador 2';

    player1NameDisplay.textContent = player1Name;
    player2NameDisplay.textContent = player2Name;
    currentPlayerNameDisplay.textContent = player1Name;

    playerNamesInput.style.display = 'none';
    gameContainer.style.display = 'grid'; // Asegurar que el juego se muestre

    shuffleArray(cardPairs);
    gameContainer.innerHTML = '';
    cards = cardPairs.map(pair => createCard(pair));
    cards.forEach(card => gameContainer.appendChild(card));
    flippedCards = [];
    matchedCards = [];
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    canFlip = true;
    updateScoreDisplay();
}

function flipCard() {
    if (!canFlip || this === flippedCards[0] || this.classList.contains('matched')) {
        return;
    }

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        canFlip = false;
        setTimeout(checkForMatch, 1000);
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const icon1 = card1.querySelector('.card-back i').classList[1];
    const icon2 = card2.querySelector('.card-back i').classList[1];

    if (icon1 === icon2) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);

        canFlip = true;
        if (matchedCards.length !== cardPairs.length) {
            Swal.fire({
                title: '¡Pareja encontrada!',
                text: `${currentPlayer === 1 ? player1Name : player2Name} sigue jugando.`,
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
        updateScore();
        checkGameEnd();

    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            switchPlayer();
            canFlip = true;
        }, 1000);
    }
    flippedCards = [];
}

function updateScore() {
    if (currentPlayer === 1) {
        player1Score++;
    } else {
        player2Score++;
    }
    updateScoreDisplay();
}

function updateScoreDisplay() {
    scorePlayer1Display.textContent = player1Score;
    scorePlayer2Display.textContent = player2Score;
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateTurnDisplay();
    Swal.fire({
        title: `Turno de ${currentPlayer === 1 ? player1Name : player2Name}`,
        icon: 'info',
        timer: 1500,
        showConfirmButton: false
    });
}

function updateTurnDisplay() {
    currentPlayerNameDisplay.textContent = currentPlayer === 1 ? player1Name : player2Name;
}

function checkGameEnd() {
    if (matchedCards.length === cardPairs.length) {
        let winner;
        if (player1Score > player2Score) {
            winner = player1Name;
        } else if (player2Score > player1Score) {
            winner = player2Name;
        } else {
            winner = 'Empate';
        }
        Swal.fire({
            title: '¡Juego Terminado!',
            text: winner === 'Empate' ? '¡Es un Empate!' : `¡El ganador es: ${winner}! (${player1Name}: ${player1Score}, ${player2Name}: ${player2Score})`,
            icon: 'success',
            confirmButtonText: 'Jugar de Nuevo'
        }).then(() => {
            resetGame(); // Llamamos a resetGame en lugar de setupGame directamente
        });
    }
}

function resetGame() {
    playerNamesInput.style.display = 'flex'; // Mostrar la entrada de nombres
    gameContainer.style.display = 'none';    // Ocultar el juego
    player1Input.value = '';
    player2Input.value = '';
    player1Name = 'Jugador 1';
    player2Name = 'Jugador 2';
    player1NameDisplay.textContent = player1Name;
    player2NameDisplay.textContent = player2Name;
    currentPlayerNameDisplay.textContent = player1Name;
    scorePlayer1Display.textContent = '0';
    scorePlayer2Display.textContent = '0';
    cards = [];
    flippedCards = [];
    matchedCards = [];
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    canFlip = true;
    gameContainer.innerHTML = ''; // Limpiar las cartas del juego
}

resetButton.addEventListener('click', resetGame);
startGameButton.addEventListener('click', startGame);

// Ocultar el juego al inicio hasta que se ingresen los nombres
gameContainer.style.display = 'none';