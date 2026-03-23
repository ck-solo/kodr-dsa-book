// Q52. V Pattern;
const prompt = require("prompt-sync")();
let numb = prompt("Enter a number: ");
for (let i = 0; i < numb; i++) {
  let row = "";
  for (let j = 0; j < 2 * numb; j++) {
    if (j === i || j === 2 * numb - 2 - i) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
