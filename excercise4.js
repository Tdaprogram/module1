/**
 * This class represents a set of mathematical operations.
 */
class MathsOperations {
  /**
   * This function returns the full name of a student by concatenating the first name and last name.
   *
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @returns {string} The full name of the student.
   */
  studentName(firstName, lastName) {
    return firstName + " " + lastName;
  }

  /**
   * This function calculates the sum of two numbers.
   *
   * @param {number} num1 - The first number to add.
   * @param {number} num2 - The second number to add.
   * @returns {number} The sum of num1 and num2.
   */
  sum(num1, num2) {
    let numsum = num1 + num2;
    return numsum;
  }

  /**
   * This function calculates the difference between two numbers.
   *
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {number} The difference between num1 and num2.
   */
  subtract(num1, num2) {
    let numsub = num1 - num2;
    return numsub;
  }

  /**
   * This function calculates the division of two numbers.
   *
   * @param {number} num1 - The dividend.
   * @param {number} num2 - The divisor.
   * @returns {number} The result of dividing num1 by num2.
   */
  division(num1, num2) {
    let numdiv = num1 / num2;
    return numdiv;
  }

  /**
   * This function calculates the product of two numbers.
   *
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {number} The product of num1 and num2.
   */
  multiply(num1, num2) {
    let numMulty = num1 * num2;
    return numMulty;
  }
}

/**
 * This script demonstrates the usage of the MathsOperations class.
 */
let mathsOperationsOutput = new MathsOperations();
console.log(
  `Program written by  - ` +
    mathsOperationsOutput.studentName("Tanmay", "Patel")
);
console.log(mathsOperationsOutput.sum(20, 10));
console.log(mathsOperationsOutput.subtract(20, 10));
console.log(mathsOperationsOutput.division(20, 10));
console.log(mathsOperationsOutput.multiply(20, 10));
