const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleElement.innerHTML = "";
    guessesElement.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach(letter => {
        const letterElement = document.createElement("span")
        letterElement.textContent = letter;
        puzzleElement.appendChild(letterElement);
    });
}

const wordCount = '3';

const startGame = async () => {
    const puzzle = await getPuzzle(wordCount);
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// Using Fetch
// getPuzzle(wordCount).then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })


// Using Callback 
// getPuzzle(wordCount, (error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     } else {
//         console.log(puzzle);
//     }
// });

// Using Promise
// getPuzzle(wordCount).then((puzzle) => {
//     console.log(puzzle);
// }, (err) => {
//     console(err);
// });




