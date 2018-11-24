/********************************************************
 *  This class to explain Basics and Operators in javascript
 * Author by Eghambaram
 * date: 11-09-2018
 ************************************************************/

// This is my first Javascript code!
console.log("Hello World");

//********* BASICS ********************

// --- Variable --
let name = "Welcome to Javascript";
console.log(name);
// Cann't use reserved words like if, else, catch...
// Should be meaningful
// Cann't start with number(1name)
// Cann't contain a space and hyphen(-)
// Are case-sensitive

// --Constants--
const interestRate = 0.5;
// Constants are not re-assigned

//--- Primitive Types
let firstName = "Hello"; // String Literal
let age = 24; // Number Literal
let isApproved = false; // Boolean Literal
let lastName = undefined;
let selectedColor = null;

// --- Reference Types

// Objects
let person = {
  name: "Welcome",
  age: 30
};

// Dot Notation
person.name = "John";
//Bracket Notation
let selection = "name";
person[selection] = "Mary";
console.log(person);
console.log(person.name);

//Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

//Function
function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greet("Jack", "Jill");
greet("Mary");

function square(number) {
  return number * number;
}
console.log(square(2));

// Operators
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment (++)
console.log(x++);
console.log(x);
console.log(++x);
// Decrement (--)
console.log(--x);

// Assignment Operator

x = 10;
console.log((x = x + 5));
console.log((x += 5));
console.log((x = x * 3));
console.log((x *= 3));

console.log("A" - "B" + 2);
console.log("A" + "B" + "2");

// Comparison Operator

x = 1;
// Relational Operator
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

//Equality
console.log(x === 1);
console.log(x !== 1);

// Strict Equality ( Type+ Value)
console.log(1 === 1);
console.log("1" === 1);

// Lose Equality (Value)
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);

// Ternary Operator

// If a customer has more than 100 points
// they are a gold customers, otherwise
// they are silver customers

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// ---Logical Operators
// Logical AND (&&)
// Both values TRUE returns TRUE
//Logical OR (||)
// Return TRUE if one of the operands is TRUE

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
let and_eligibleForLoan = highIncome && goodCreditScore;
console.log("AND_Eligible ", and_eligibleForLoan);
console.log("Eligible ", eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

//---BITWISE OPERATORS

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011 // OR
// 4 = 00000000 // AND
console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

//--- Operator Precedence

let expression = (2 + 3) * 4;
console.log(expression);

//+++ Exercise - Swapping Variables

let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
