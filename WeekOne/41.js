// Q41.  Make a choice based calculator using do while
const prompt = require("prompt-sync")();
let choice;
do {
  choice = parseInt(prompt("1.Add 2.Subtract 3.Multply 4.Divide "));

  if (choice >= 1 && choice <= 4) {
    let a = parseInt(prompt("Enter your first number "));
    let b = parseInt(prompt("Enter your second number "));

    if (choice === 1) {
      console.log("Result " + (a + b))
    } else if (choice === 2) {
      console.log("Result " + (a - b));
    } else if (choice === 3) {
      console.log("Result " +( a * b));
    } else if (choice === 4) {
      console.log("Result " +( a / b));
    } else if (choice !== 5) {
      console.log("Invalid number");
    }
  }
} while (choice !== 5);
  console.log("EXIT ");

