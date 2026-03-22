// Q42. Print Weekday using Switch
const prompt = require("prompt-sync")();

let day = parseInt(prompt("Enter number: "));

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Moday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Enter correct number";
}
console.log(day);
