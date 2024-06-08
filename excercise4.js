// Mathematical Operations Exercise 4.1

function sum(num1, num2) {
  let numsum = num1 + num2;
  return numsum;
}
function substract(num1, num2) {
  let numsub = num1 - num2;
  return numsub;
}
function division(num1, num2) {
  let numdiv = num1 / num2;
  return numdiv;
}
function multiply(num1, num2) {
  let numMulty = num1 * num2;
  return numMulty;
}

// Console Output for functions

// Addition

let num1 = 20;
let num2 = 10;

// Calling funstions +, - , / and * respectively.

let sumtotal = sum(num1, num2);
console.log("Sum of numbers  = ", +sumtotal);
clearInterval;

let subtotal = substract(num1, num2);
console.log("Substraction of numbers  = ", +subtotal);
clearInterval;

let divtotal = division(num1, num2);
console.log("Division of numbers  = ", +divtotal);
clearInterval;

let multiplytotal = multiply(num1, num2);
console.log("Sum of numbers  = ", +multiplytotal);
clearInterval;

//Function to call name

function fullNAme(firstName, lastName) {
  return firstName + " " + lastName;
}

//Calling Function to print Full Name

let fName = "Tanmay";
let lName = "Patel";

let personName = fullNAme(fName, lName);
console.log(personName);
