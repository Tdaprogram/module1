// Mathasmatical Operations Excercise 4.1

function sum(num1,num2){
    let numsum = num1 + num2;
    return numsum
}
function substract(num1,num2){
    let numsub = num1 - num2;
    return numsub
}
function division(num1,num2){
    let numdiv = num1  / num2;
    return numdiv
}
function multiply(num1,num2){
    let nummulty = num1  * num2;
    return nummulty
}

// Console Output for functions

// Addition

let num1 = 10;
let num2 = 10;

// Calling funstions +, - , / and * respectively.

let sumtotal = sum(num1,num2);
console.log("Should return 10+10 = 20 : Addition " + (sumtotal == 20 ? 'pass' : 'fail' ));

let subtotal = substract(num1,num2);
console.log("Should return 10-10 = 0 : Substraction " + (subtotal == 0 ? 'pass' : 'fail' ));

let divtotal = division(num1,num2);
console.log("Should return 10/10 = 1 : Division " + (divtotal == 1 ? 'pass' : 'fail' ));

let multiplytotal = multiply(num1,num2);
console.log("Should return 10*10 = 100 : Multiplication " + (multiplytotal == 100 ? 'pass' : 'fail' ));

