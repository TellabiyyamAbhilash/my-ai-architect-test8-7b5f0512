const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

let randomNumber;
let attempts = 0;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Number between 1 and 100
    attempts = 0;
    message.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    checkButton.disabled = false;
    resetButton.style.display = 'none';
    guessInput.focus();
}

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'orange';
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        message.style.color = 'green';
        guessInput.disabled = true;
        checkButton.disabled = true;
        resetButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }
}

checkButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', initializeGame);

// Initialize the game when the page loads
initializeGame();