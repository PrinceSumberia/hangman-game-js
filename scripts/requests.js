// Using Async-Await
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error("Unable to fetch the data");
    }
}




// Using Callback
// const getPuzzle = (wordCount, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (event) => {
//         if (event.target.readyState === 4 && event.target.status === 200) {
//             const data = JSON.parse(event.target.responseText);
//             callback(undefined, data.puzzle)
//         } else if (event.target.readyState === 4) {
//             callback("An error occured", undefined)
//         }
//     });
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// }

// Using Promise
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', (event) => {
//         if (event.target.readyState === 4 && event.target.status === 200) {
//             const data = JSON.parse(event.target.responseText);
//             resolve(data.puzzle)
//         } else if (event.target.readyState === 4) {
//             reject("An error occured")
//         }
//     });
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// })

// Using Fetch 
// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error("Unable to fetch the data");
//         }
//     }).then((data) => {
//         return data.puzzle;
//     })
// }



