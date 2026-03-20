const prompt = require("prompt-sync")();

// Q39 Automorphic number
let numb = parseInt(prompt("Enter a number: "));
let temp = numb;
let square = numb * numb;
let isAutomorphic = true;  

while (temp > 0) {
    if (temp % 10 !== square % 10) {
        isAutomorphic = false;  
        break; 
    }
    temp = Math.floor(temp / 10);
    square = Math.floor(square / 10);
}
 
if (isAutomorphic) {
    console.log("Automorphic number");
} else {
    console.log("Not an automorphic number");
}