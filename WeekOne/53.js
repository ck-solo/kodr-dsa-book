// Q53. X Pattern;
const prompt = require("prompt-sync")()
let numb = prompt("Enter a star value: ")
for (let i = 0; i < numb; i++) {
  let row = "";

  for (let j = 0; j < numb; j++) {
    if (j === i || j === numb - 1 - i) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}