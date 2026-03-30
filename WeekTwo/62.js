// Q62. Linear Search an array - If element found print the index, else -1
let prompt = require("prompt-sync")()
let arr = [20,30,40,100,23,34,2,33,543]

let t = Number(prompt("Enter search element:- "))
let index = -1;

for(let i = 0; i< arr.length ; i++){
    if(arr[i]== t){
        index = i
        break
    }
}
console.log(index == -1 ? index : index)