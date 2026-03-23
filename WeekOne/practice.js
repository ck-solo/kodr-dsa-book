// pattern programming

const prompt = require("prompt-sync")();

let numb = prompt("Enter a number : ")

for(let i = 1 ; i<= numb ; i++){
    let row = "";

    for(let j = 1; j<= numb; j++){
        row += "* "
    }
    console.log(row)
}
