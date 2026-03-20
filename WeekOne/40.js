const prompt = require("prompt-sync")();

let input = prompt("how r u ? ")

do {
    console.log('"hello"'); // prints hello with quotes
    input = prompt("Enter 'y' to continue, anything else to stop: ");
} while (input === 'y');

console.log("Stopped!");