const Hangman = function (word, remainingGuesses, guessedLetterArray = []) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
    this.guessedLetterArray = guessedLetterArray;
    this.count = count;
}

Hangman.prototype.splitWord = function () {
    const arrayWords = this.word.split(" ");
    let newArray = [];
    arrayWords.forEach(word => {
        newArray = newArray.concat(word.toLowerCase().split(''));
    });
    return newArray;
}

Hangman.prototype.guessedLetters = function (letter) {
    if (this.count >= this.remainingGuesses) {
        console.log(`No more guesses are allowed. Allowed Guesses were ${this.remainingGuesses} are you guessed ${this.count} times`);
    } else {
        this.count = this.count + 1;
        this.guessedLetterArray.push(letter);
        return this.guessedLetterArray;
    }
}


const game1 = new Hangman("Hello World", 5);
console.log(game1.splitWord());
console.log(game1.guessedLetters('a'));
console.log(game1.guessedLetters('b'));
console.log(game1.guessedLetters('c'));
console.log(game1.guessedLetters('d'));
console.log(game1.guessedLetters('e'));
console.log(game1.guessedLetters('f'));

console.log(`Word is ${game1.word} and Number of remaining guesses are ${game1.remainingGuesses} and guessedArray is ${game1.guessedLetterArray}`);

