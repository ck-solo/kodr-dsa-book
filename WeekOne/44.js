// Q44. Guess Game 
const prompt = require("prompt-sync")()

let number;
let numb = 8;

do{
    number = parseInt(prompt("Guess the number "))
    if(number > numb){
        console.log("Guess number is high")

    } else if (number < numb){
        console.log("Guess number is too low")
    } else {
           console.log("Congratulation you guess the correct number .") 
    }
    
} while ( number !== numb  )
 