// Q48. Right Triangle - Alphabet Pattern
const prompt = require("prompt-sync")()

let numb= prompt("Enter a number: ")

for(let i = 1; i<=numb; i++){
    let row = ""
    for(let j = 1; j<=i; j++){
        row += String.fromCharCode(64 + j) + " ";
    }
    console.log(row)
}