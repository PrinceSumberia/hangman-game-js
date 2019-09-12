const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');
const game1 = new Hangman('Hello world', 5);

puzzleElement.textContent = game1.startGame();
guessesElement.textContent = game1.statusMessage();

window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    puzzleElement.textContent = game1.startGame();
    guessesElement.textContent = game1.statusMessage();
});