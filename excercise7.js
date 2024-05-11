// Mathasmatical Operations Excercise 4.1

function operation(num1, num2, symbol) {
  let operationtype = symbol;
  if (operationtype == "+") {
    let numsum = num1 + num2;
    return numsum;
  }
  if (operationtype == "-") {
    let numsum = num1 - num2;
    return numsum;
  }
  if (operationtype == "/") {
    let numsum = num1 / num2;
    return numsum;
  }
  if (operationtype == "*") {
    let numsum = num1 * num2;
    return numsum;
  }
}

/*function sum(num1, num2) {
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
  let nummulty = num1 * num2;
  return nummulty;
}
*/
// Console Output for functions

// Calling funstions +, - , / and * respectively.

for (let num1 = -1; num1 < 3; num1++) {
  let num2 = 4;
  let sumtotal = operation(num1, num2, "+");
  console.log("When Number1 is = " + num1 + " and " + "Numbner2 = " + num2);
  console.log("");
  console.log(
    "Addition - " + "Should return = " + (num1 + num2) + " " +  " ",
    sumtotal == num1 + num2 ? "pass" : "fail"
  );
let subtotal = operation(num1, num2,"-");
  console.log(
    "Substarction - " + "Should return = " + (num1 - num2) + " " + " ",
    subtotal == num1 - num2 ? "pass" : "fail"
  );
  let divtotal = operation(num1, num2,"/");
  console.log(
    "Division - " +  "Should return = " + num1 / num2 + " " + " ",
    divtotal == num1 / num2 ? "pass" : "fail"
  );
  let multiplytotal = operation(num1, num2,"*");
  console.log(
    "Multiplication - " + "Should return = " + num1 * num2 + " " + " ",
    multiplytotal == num1 * num2 ? "pass" : "fail"
  );
  console.log("");
  console.log("");
}

/*
  

let sumtotal = sum(num1,num2);
console.log("Should return", + num1+num2, + "= 20 : Addition " + (sumtotal == 20 ? 'pass' : 'fail' ));

let subtotal = substract(num1,num2);
console.log("Should return 10-10 = 0 : Substraction " + (subtotal == 0 ? 'pass' : 'fail' ));

let divtotal = division(num1,num2);
console.log("Should return 10/10 = 1 : Division " + (divtotal == 1 ? 'pass' : 'fail' ));

let multiplytotal = multiply(num1,num2);
console.log("Should return 10*10 = 100 : Multiplication " + (multiplytotal == 100 ? 'pass' : 'fail' ));

*/
