// Q67. Strong number using methods.
const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number"));
let original = num;
let sum = 0;

while (num > 0) {
  let digit = num % 10;
  let fact = 1;
  for (let i = 1; i <= digit; i++) {
    fact *= i;
  }
  sum += fact;
  num = Math.floor(num / 10);
}

if (sum === original) {
  console.log("Strong Number");
} else {
  console.log("Not a Strong Number");
}
