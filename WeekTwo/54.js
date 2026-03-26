// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.
const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter size of array: "));

let arr = []
let sum = 0;

for(let i = 0; i < num; i++){
    arr[i] = parseFloat(prompt(`Enter element ${i + 1}:`))
    sum += arr[i]
}

let avg = sum / num
console.log("sum :" , sum)
console.log("avg: " , avg)
