const Hangman = function (word, remainingGuesses, guessedLetterArray = [], letterArray = [], guessingArray = []) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
    this.guessedLetterArray = guessedLetterArray;
    this.letterArray = letterArray;
    this.guessingArray = guessingArray;
};

Hangman.prototype.splitWord = function () {
    const arrayWords = this.word.split(' ');
    arrayWords.forEach((word) => {
        this.letterArray = this.letterArray.concat(word.toLowerCase().split(''));
    });
    return this.letterArray;
};

Hangman.prototype.startGame = function (game) {
    game.splitWord().forEach((element) => {
        this.guessingArray.push("*");
    });
    console.log(this.guessingArray);
}


Hangman.prototype.printGuessingArray = function () {
    let strElement = '';
    this.guessingArray.forEach(element => {
        strElement = strElement.concat(element)
    });
    console.log(strElement);
};

Hangman.prototype.guessedLetters = function (letter) {
    if (this.remainingGuesses == 0) {
        console.log(`No more guesses are allowed. You guessed ${this.remainingGuesses} times`);
    } else {
        this.remainingGuesses -= 1;
        this.guessedLetterArray.push(letter);
        const index = this.letterArray.findIndex(element => element === letter);
        if (index > -1) {
            this.guessingArray[index] = letter;
        }
        // console.log(this.guessingArray);

        this.printGuessingArray();
        return this.guessedLetterArray;
    }
};


const game1 = new Hangman('Hello world', 5);
game1.startGame(game1);
game1.guessedLetters('w')
game1.guessedLetters('o')
game1.guessedLetters('l')
game1.guessedLetters('d')




// const newArray = game1.splitWord();

// console.log(newArray);
// console.log(game1.guessedLetters('b'));
// console.log(game1.guessedLetters('c'));
// console.log(game1.guessedLetters('d'));
// console.log(game1.guessedLetters('e'));
// console.log(game1.guessedLetters('f'));
