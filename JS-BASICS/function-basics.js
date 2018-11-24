// // Function declaration
// walk(); // Hoisting --> while we are able to call before and after function using function declaration

// function walk() {
//   console.log("Walk...");
// }

// // Anonymous Function Expression

// const run = function() {
//   console.log("Run....");
// };
// const move = run;
// run();
// move();

// Arguments

// function sum() {
//   let total = 0;
//   // i.e in javascript arguments object we are able to pass listof values into function
//   for (let value of arguments) total += value;
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

// REST Operator

// REST operator(...) is present always in last parameter in function
// function sum(discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));

// Default Parameters

// function interest(principle, rate = 3.5, year = 5) {
//   return ((principle * rate) / 100) * year;
// }

// console.log(interest(10000));

// Getters & Setters

// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// person.fullName = "John Smith";
// console.log(person);

// Try and Catch

// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   set fullName(value) {
//     if (typeof value != "string") throw new Error("Value is not a String");
//     const parts = value.split(" ");
//     if (parts.length !== 2) throw new Error("Enter a first and Last names");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// try {
//   person.fullName = "John Smith";
// } catch (e) {
//   alert(e);
//   console.log(e);
// }
// console.log(person);

//The this Keyword

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function(tag) {
//       console.log(this.title, tag);
//     }, this);
//   }
// };
// video.showTags();

// Alternate way using arrow function

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     // const self = this; or bind(this)
//     this.tags.forEach(tag => {
//       console.log(this.title, tag);
//     });
//   }
// };
// video.showTags();
