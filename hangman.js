class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = "playing";

    }

    startGame() {
        let puzzle = '';
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    }

    calculateStatus() {
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter);
        })

        if (this.remainingGuesses === 0) {
            this.status = "failed";
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = "playing";
        }
    }

    makeGuess(guess) {
        if (this.status === "playing") {

            guess = guess.toLowerCase();
            const isUnique = !this.guessedLetters.includes(guess);
            const isBadGuess = !this.word.includes(guess);

            if (isUnique) {
                this.guessedLetters.push(guess);
            }

            if (isUnique && isBadGuess) {
                this.remainingGuesses--;
            }

            this.calculateStatus();
        }
    }

    statusMessage() {
        const status = this.status;
        let textContent = ""

        if (status === "playing") {
            textContent = `Guesses Left: ${this.remainingGuesses}`
        } else if (status === "failed") {
            textContent = `Nice try! The Correct word was "${this.word.join("")}"`
        } else {
            textContent = `Great Work! You Guessed the Word.`
        }
        return textContent;
    }
}
