// Q49. Inverted Right Triangle Pattern
const prompt = require("prompt-sync")()
let numb = prompt("Enter a number: ")
for(let i = numb; i>=1; i--){
    let row = ""
    for(let j = 1; j <=i ; j++){
        row += "*"
    }
    console.log(row)
}