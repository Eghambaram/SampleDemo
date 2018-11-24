// Exercise -1: MAX of Two Numbers
// let number = max(4, 3);
// console.log(number);

// function max(a, b) {
//   return a > b ? a : b;
// }

// Exercise -2 Landscape or Portrait

// console.log(isLandscape(500, 300));
// function isLandscape(width, height) {
//   // return width > height ? "isLandscape" : "isPotrirate";
//   return width > height;
// }

// Exercise -3 FIZZBUZZ
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
//Divisible by 3 and 5 => FizzBuzz
//Divisible by 3 => Fizz
// Not divisible by 3 and 5 =>input

// const output = fizzBuzz(10);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   return input;
// }

// Excercise - 4 Demerit Points
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3) -> 1
// 12 points -> suspended

// checkSpeed(130);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed <= speedLimit + kmPerPoint) {
//     console.log("Ok");
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) console.log("License Suspended..");
//   else console.log("Points", points);
// }

// Exercise - 5 Even and Odd Numbers

// showNumbers(10);
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     // if (i % 2 === 0) console.log(i, "Even");
//     // else console.log(i, "Odd");
//     const message = i % 2 === 0 ? "EVEN" : "ODD";
//     console.log(i, message);
//   }
// }

// Exercise -6 Count Truthy

// const array = [0, null, undefined, "", 1, 2, 3]; // 0,null,undefined,"",NaN -> Falsey Values
// console.log(countTruthy(array));
// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// Exercise -7 String Properties
// const movie = {
//   title: "A",
//   releaseYear: 2007,
//   rating: 5.0,
//   director: "B"
// };

// showProperties(movie);
// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
// }

// Exercise 8 - Sum of multiples of 3 and 5

// console.log(sum(10));
// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
//   return sum;
// }

// Exercise 9 - Grade
// Average Sum of values/ length
// If 0-59 returns "F-Grade"
// If 60-69 returns "D-Grade"
// If 70-79 returns "C-Grade"
// If 80-89 returns "B-Grade"
// If 90-100 returns "A-Grade"

// const marks = [100, 90, 100];
// console.log(calculateGarde(marks));

// function calculateGarde(marks) {
//   const average = calculateAverage(marks);
//   if (average < 60) return "F-Grade";
//   if (average < 70) return "D-Grade";
//   if (average < 80) return "C-Grade";
//   if (average < 90) return "B-Grade";
//   return "A-Grade";
// }

// function calculateAverage(arrays) {
//   let sum = 0;
//   for (let value of arrays) sum += value;
//   return sum / arrays.length;
// }

// Exercise 10- Stars

// showStarts(10);
// showreverseStarts(10);
// function showStarts(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// function showreverseStarts(rows) {
//   for (let row = rows; row >= 0; row--) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// Exercise 11 -- Prime Numbers

showPrimes(20);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}
