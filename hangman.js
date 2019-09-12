class Hangman {
    constructor(word, remainingGuesses, guessedLetterArray = [], letterArray = [], guessingArray = []) {
        this.word = word;
        this.remainingGuesses = remainingGuesses;
        this.guessedLetterArray = guessedLetterArray;
        this.letterArray = letterArray;
        this.guessingArray = guessingArray;
    }
    splitWord() {
        const arrayWords = this.word.split(' ');
        arrayWords.forEach((word) => {
            this.letterArray = this.letterArray.concat(word.toLowerCase().split(''));
        });
        return this.letterArray;
    }
    startGame(game) {
        game.splitWord().forEach((element) => {
            this.guessingArray.push('*');
        });
        console.log(this.guessingArray);
    }
    printGuessingArray() {
        let strElement = '';
        this.guessingArray.forEach((element) => {
            strElement = strElement.concat(element);
        });
        console.log(strElement);
    }
    guessedLetters(letter) {
        if (this.remainingGuesses == 0) {
            console.log(`No more guesses allowed.`);
        } else {
            this.guessedLetterArray.push(letter);
            // const index = this.letterArray.findIndex(element => element === letter);
            const indexes = searchIndex(this.letterArray, letter);
            indexes.forEach((index) => {
                this.guessingArray[index] = letter;
            });
            if (indexes.length == 0) {
                this.remainingGuesses -= 1;
            }
            console.log(this.guessingArray);
            this.printGuessingArray();
            return this.guessedLetterArray;
        }
    }
}

const searchIndex = (arr, val) => {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            indexes.push(i);
        }
    }
    return indexes;
};

const game1 = new Hangman('Hello world', 5);
game1.startGame(game1);
window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode);
    game1.guessedLetters(guess);
})

// const newArray = game1.splitWord();

// console.log(newArray);
// console.log(game1.guessedLetters('b'));
// console.log(game1.guessedLetters('c'));
// console.log(game1.guessedLetters('d'));
// console.log(game1.guessedLetters('e'));
// console.log(game1.guessedLetters('f'));
