// Q44. Right Triangle - Number Pattern
const prompt = require("prompt-sync")()
let star = prompt("Enter number of star: ")

for(let i = 1; i <= star; i++){
    let row = " ";
    for(let j = 1 ; j <= i; j++){
        row += j
    }
    console.log(row)
}