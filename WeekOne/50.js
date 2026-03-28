// Q50. Mirrored Right Triangle Pattern
const prompt = require("prompt-sync")();
let numb = prompt("Enter a numb: ");
for (let i = 1; i <= numb; i++) {
    let row = "";
 
    for (let s = 1; s <= numb - i; s++) {
        row += " ";
    }
 
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
