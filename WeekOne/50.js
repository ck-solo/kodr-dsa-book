// Q50. Mirrored Right Triangle Pattern
const prompt = require("prompt-sync")();
let numb = prompt("Enter a numb: ");
for (let i = 1; i <= numb; i++) {
  let row = "";
  for (let j = 1; j <= numb - 1; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "*";
  }

  console.log(row);
}
