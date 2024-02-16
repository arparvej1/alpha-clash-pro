let score = 0;
let life = 5;
let gameOn = 0;

function play() {
    hideElementById('home-screen');
    showElementById('game-screen');
    hideElementById('game-end-screen');
    score = 0;
    life = 5;
    gameOn = 1;
    setTextElementValueById('current-score', score);
    setTextElementValueById('current-life', life);
    continueGame();
}

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();

    if (playerPressed === 'Escape') {
        gameOver();
        return;
    }
    if (gameOn === 0) {
        return;
    }
    if (playerPressed === currentAlphabet) {
        score++;
        setTextElementValueById('current-score', score);
        continueGame();
        removeBackgroundColorById(currentAlphabet);
    } else {
        life--;
        setTextElementValueById('current-life', life);
        life < 1 ? gameOver() : null;
    }
}

function continueGame() {
    const alphabet = getARandomAlphabet();
    document.getElementById('current-alphabet').innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function gameOver() {
    hideElementById('game-screen');
    showElementById('game-end-screen');
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    removeBackgroundColorById(currentAlphabet);
    gameOn = 0;
    setTextElementValueById('last-score', score);

}

// Play Game
document.getElementById('play-now').addEventListener('click', play);
document.getElementById('play-again').addEventListener('click', play);
document.addEventListener('keyup', handleKeyboardKeyUpEvent);