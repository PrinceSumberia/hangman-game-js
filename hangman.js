class Hangman {
    constructor(word, remainingGuesses, guessedLetters = [], letterArray = [], guessingArray = []) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = guessedLetters;
        this.letterArray = letterArray;
        this.guessingArray = guessingArray;
    }

    startGame() {
        let puzzle = '';
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (isUnique) {
            this.guessedLetters.push(guess);
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--;
        }
    }
}



const game1 = new Hangman('Hello world', 5);
window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    console.log(game1.startGame());
    console.log(game1.remainingGuesses);

})

// const newArray = game1.splitWord();

// console.log(newArray);
// console.log(game1.guessedLetters('b'));
// console.log(game1.guessedLetters('c'));
// console.log(game1.guessedLetters('d'));
// console.log(game1.guessedLetters('e'));
// console.log(game1.guessedLetters('f'));
