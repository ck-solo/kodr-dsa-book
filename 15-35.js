const prompt = require("prompt-sync")();

// Q16. Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

// const name = prompt("Enter your name ")
// const age = prompt("Enter your age ")

// if(age >= 18){
//     console.log(`Hello ${name}, You are a valid voter.`)
// }else if(age < 18){
//     console.log(`Sorry ${name}, you can't cast the vote.`)
// }

// Q17. Accept a day number between 1-7 and print the corresponding day name.

// const dayNumber = parseInt(prompt("Enter a day number (1-7): "));
// switch (dayNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;

//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// }

// Q18. Accept three numbers and print the greatest among them
// const num1 = prompt("Enter first number: ");
// const num2 = prompt("Enter second number: ");
// const num3 = prompt("Enter third number: ");
// if (num1 > num2 && num1 > num3) {
//     console.log(`${num1} is greater than ${num2} and ${num3}`);
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`${num2} is greater than ${num1} and ${num3}`);
// } else if (num3 > num1 && num3 > num2) {
//     console.log(`${num3} is greater than ${num1} and ${num2}`);
// } else {
//     console.log("All numbers are equal.");
// }

// Q19	Accept a year and check if it a leap year or not (google to find out what's a leap year)

// let year = parseInt(prompt("Enter a year: "));
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

// Q20	Shop discount
// let price = parseInt(prompt("Enter the price of the product: "));
//   let discount = 0;

//   if (price >= 500) {
//     discount = price * 0.2;
//   } else if (price >= 200) {
//     discount = price * 0.1;
//   } else {
//     discount = 0;
//   }

//   let finalPrice = price - discount;
//   console.log(`The final price after discount is: ${finalPrice}`);
//   console.log("Original Price:", price);
//  console.log("Discount:", discount);
//    console.log("Final Price:", finalPrice);

// Q21 Bijli Bill

//  let units = parseInt(prompt("Enter the number of units consumed: "));
// let billAmount = 0;

// if (units <= 100) {
//   billAmount = units * 1.5;
// } else if (units <= 200) {
//   billAmount = 100 * 1.5 + (units - 100) * 2.5;
// } else if (units <= 300) {
//   billAmount = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4;
// } else {
//   billAmount = 100 * 1.5 + 100 * 2.5 + 100 * 4 + (units - 300) * 6; // FIXED
// }

// console.log("Total Bill: ₹" + billAmount);


// Q22 . Accept an English alphabet from user and check if it is a consonant or a vowel.
// let char = prompt("Enter an alphabet ").toLowerCase()
// if(char.length !== 1 || !/[a-z]/.test(char)){
//     console.log("Invalid input. Please enter a single English alphabet.")
// } else if("aeiou".includes(char)){
//     console.log(`${char} is a vowel.`)
// }else{
//     console.log(`${char} is a consonant.`)

// }


// Q23. Accept an integer and Print \Hello World\" n times"
// let number = parseInt(prompt("Enter an integer: "));
// for (let i = 0; i < number; i++) {
//   console.log("Hello World");
// }

// Q24. Print natural number up to n.
// let number = parseInt(prompt("Enter an integer: "));
// for(let i = 1; i <= number; i++){
//     console.log(i)
// }


// Q25. Reverse for loop. Print n to 1.
// let number = parseInt(prompt("Enter a number: "))
// for(let i = number ; i >=1; i--){
//     console.log(i)
// }

// Q26. Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)

// let number = parseInt(prompt("Enter a number: "))

// for(let i = 1; i <= 10; i++){
//     console.log(`${number} * ${i} = ${number * i}`)
// }   

// Q27. Sum up to n terms.

// let number = parseInt(prompt("Enter a number "))
// let sum = 0;
// for (let i = 0 ; i<=number; i++){
//     sum += i;
//     console.log(sum)
// }


// Q28. Factorial of a number
// let number = parseInt(prompt("Enter a number: "))
// let factorial = 1;
// for(let i = 1 ; i <=number; i++){
//     factorial *= i;
//     console.log(factorial)

// }


// Q29. Print the sum of all even & odd numbers in a range separately.

// let number = parseInt(prompt("Enter a number: "))
// let sumEven = 0;
// let sumOdd = 0;
// for(let i = 1; i <= number; i++){
//     if(i % 2 === 0){
//         sumEven += i;
//     }else{
//         sumOdd += i;
//     }
// }
// console.log(sumEven)
// console.log(sumOdd)


// Q30. Print all the factors of a number.

// let numb = parseInt(prompt("Enter a number: "))
// for(let i = 1; i <= numb; i++){
//     if(numb % i === 0){
//         console.log(i)
 
//     }
// }

// Q31. Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)
// let numb = parseInt(prompt("Enter a number: "))
// let sum = 0;
// for(let i = 1; i<numb; i++){
//     if(numb % i === 0){
//         sum += i
//     }
// }
// console.log(sum)

// Q32. Check if the number is Prime or not.
// let numb = parseInt(prompt("Enter a number : "))
// let isprime = true;
// if( numb <= 1){
//     isprime = false
// }else{
//     for(let i = 2; i<=Math.sqrt(numb); i++){
//         if(numb % i === 0){
//             isprime = false;
//             break
//         }
//     }
// }
//  console.log(isprime ? "Prime" : "Not Prime");


// Q33. Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)

// let a = parseInt(prompt("Enter first number "))
// let b = parseInt(prompt("Enter second number "))
// let result = 1
// for(let i = 1;i<=b ;i++){
//     result *= a
// }

// console.log("Answer", result)

// Q34. Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)
// let num = parseInt(prompt("Enter a number: "))
// while(num >0){
//     let digit = num% 10;
//     console.log(digit)
//     num = Math.floor(num/10)
// }

// Q35. Sum of digits of a number (Ex: 936 = 18)
// let num = parseInt(prompt("Enter a number: "))
// let sum = 0
// while(num>0){
//     let digit = num % 10
//     sum += digit;
//     num = Math.floor(num / 10)
// }

// console.log("sum of digit", sum)