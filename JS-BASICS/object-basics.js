// // Object-Oriented Programming (OOP)

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   isVisible: true,
//   draw: function() {
//     console.log("Draw...");
//   }
// };

// circle.draw(); // Method

// // Factory Function

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("Draw using factory function...");
//     }
//   };
// }

// const circle1 = createCircle(5);
// console.log(circle1);

// Constructor Function
// CamelCase Notaion -- oneTwo
// Pascal Notation -- OneTwoThree

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("Draw....");
//   };
// }
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);
// const circle = new Circle(5);
// console.log(circle);
// console.log(circle.draw);

// Value vs Reference Types
// Object, Function, Array

// Hint: Primitives are copied by thier value
// Objects are copied by their reference

// let number = 10;
// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }
// increase(obj);
// console.log(obj);

// Cloning an Object

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   }
// };

// const another = Object.assign({}, circle);
// const anotherSpread = { ...circle }; // Both are equal
// console.log(another, anotherSpread);

// Garbage Collection -- Is variable not used the javascript automatically de-allocate the memory
