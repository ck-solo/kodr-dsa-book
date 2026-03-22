// Question 22 using Switch (Check Consonant or Vowel using Switch)

const prompt = require("prompt-sync")();


let ch = prompt("Enter a letter: ")
if (!/[a-zA-Z]/.test(ch)) {
  if (!isNaN(ch)) {
    console.log("Invalid input ");
  }
  console.log("Invalid input");
}

ch = ch.toLowerCase();

if ("aeiou".includes(ch)) {
  console.log("Vowel");
}else{

    console.log("Consonant");
}
