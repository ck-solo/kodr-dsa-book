const prompt = require("prompt-sync")();

// Q1	Sum of two integers	Easy
// Given two integers num1 and num2, return the sum of the two integers.

// Example 1:
// Input: num1 = 12, num2 = 5
// Output: 17
// Explanation: num1 is 12, num2 is 5, their sum is 17, so we return 17.

// Q2.Print the message along with values and sum (Ex - The sum of 45 & 12 = 57)
// let num1 = 45;
// let num2 = 12;
// let sum = num1 + num2;
// console.log(`The sum of ${num1} & ${num2} = ${sum}`);

// Q3. Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)
// let num3 = parseInt(prompt("Enter first integer: "));
// let num4 = parseInt(prompt("Enter second integer: "));
// let sum2 = num3 + num4;
// console.log(`The sum of ${num3} & ${num4} = ${sum2}`);

// Q4.Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)

// let name = prompt("Enter your name: ");
// let age = parseInt(prompt("Enter your age: "));
// console.log(`Hello ${name}, you are ${age} years old.`);

// Q5. Solve Increment & decrement operator questions
// let a = 5;
// console.log(a++); // 5
// console.log(a);   // 6
// let b = 5;
// console.log(++b); // 6
// console.log(b);   // 6

// Q6 Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)

//  let x = parseInt(prompt("Enter first number: "));

//  let y = parseInt(prompt("Enter second number: "));
//    x = x + y; // x now holds the sum of x and y
//    y = x - y;
//     x = x - y;

//  console.log(`After swapping: x = ${x}, y = ${y}`);

// Q7. Accept the length and width of a rectangle. Calculate & print the area and perimeter.
// let length = parseInt(prompt("Enter the length of the rectangle: "));
// let width = parseInt(prompt("Enter the width of the rectangle: "));
// let area = length * width;
// let perimeter = 2 * (length + width);
// console.log(`The area of the rectangle is: ${area}`);
// console.log(`The perimeter of the rectangle is: ${perimeter}`);


// Q8. Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

//  let principal = parseFloat(prompt("Enter the principal amount: "));
//  let rate = parseFloat(prompt("Enter the annual interest rate (in %): "));
//  let time = parseFloat(prompt("Enter the time (in years): "));
//  let compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;
//  console.log(`The compound interest is: ${compoundInterest.toFixed(2)}`);


// Q9. Accept the three sides of triangle and calculate the area using Heron's formula

// let a = parseFloat(prompt("Enter the length of side a: "));
// let b = parseFloat(prompt("Enter the length of side b: "));
// let c = parseFloat(prompt("Enter the length of side c: "));
// let s = (a + b + c) / 2; // semi-perimeter
// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log(`The area of the triangle is: ${area.toFixed(2)}`);


// Q10. Find surface area of sphere
// let radius = parseFloat(prompt("Enter the radius of the sphere: "));
// let surfaceArea = 4 * Math.PI * radius * radius;
// console.log(`The surface area of the sphere is: ${surfaceArea.toFixed(2)}`);


// Q11. Find circumference and area of circle
// let radius = parseFloat(prompt("Enter the radius of the circle: "));
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;
// console.log(`The circumference of the circle is: ${circumference.toFixed(2)}`);
// console.log(`The area of the circle is: ${area.toFixed(2)}`);

// Q12. Accept two numbers and print the greatest between them
// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));
// if (num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`);
// } else if (num2 > num1) {
//     console.log(`${num2} is greater than ${num1}`);
// } else {
//     console.log("Both numbers are equal.");
// }

// Q13. Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

// let gender = prompt("Enter your gender (M/F): ").toUpperCase();
// if (gender === "M") {
//     console.log("Good Morning Sir");        
// } else if ( gender === "F") {
//     console.log("Good Morning Ma'am");
// } else {
//     console.log("Invalid input. Please enter 'M' for male or 'F' for female.");
// }

// Q14. Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.
// let gender = prompt("Enter your gender (M/F): ").toUpperCase();
// if (gender === "M") {
//     console.log("Good Morning Sir");        
// } else if ( gender === "F") {
//     console.log("Good Morning Ma'am");
// } else {
//     console.log("Invalid input. Please enter 'M' for male or 'F' for female.");
// }


// Q15. Accept an integer and check whether it is an even number or odd.
// let num = parseInt(prompt("Enter an integer: "));
// if (num % 2 === 0) {
//     console.log(`${num} is an even number.`);
// } else {
//     console.log(`${num} is an odd number.`);
// }

