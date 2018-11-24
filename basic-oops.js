// // 4- Pillers in Oops
// // Encapsulation; -- > methods and property in a unit(group)
// // Inheritance; --> using generic and inherite
// // Abstraction; --> DVD player show display button like interfaces(hide)
// // polymorphism;(Many form) --> instead of conditional render and usages(refactor statements)

// console.log("hello");

// // Exercise 1: StopWatch

// /*function StopWatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;

//   this.start = function() {
//     if (running) throw new Error("Stopwatch has already started...");
//     running = true;
//     startTime = new Date();
//   };
//   this.stop = function() {
//     if (!running) throw new Error("Stopwatch has not started...");
//     running = false;
//     endTime = new Date();
//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };
//   this.reset = function() {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };

//   Object.defineProperty(this, "duration", {
//     get function() {
//       return duration;
//     }
//   });
// }*/

// // Multi-Level Inheritance

// /*function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("Draw..");
//   };
// }
// const circle = new Circle(10);
// */

// // Property Descriptor

// let person = { name: "mosh" };

// // let objectBase = Object.getPrototypeOf(person);
// // let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// // console.log(descriptor);

// Object.defineProperty(person, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false
// });

// person.name = "John";
// console.log(Object.keys(person));

// function foo(a, b, c) {
//   a++;
//   b = "new string";
//   c["key"] = "new value";
// }

// var a = 1,
//   b = "old string",
//   c = { key: "old value" };

// foo(a, b, c);

// var x = 1;
// function foo() {
//   var x = 3;
// }
// foo();
// console.log(x);

// function bar() {
//   x = 4;
// }

// bar();
// console.log(false == 0);

// var a = ["apple", "banana", "cocone"];
// var b = a;

// var c = a.slice();

// a.push("date");

function f(x) {
  x += 1;
}

function g(x) {
  x.value *= 5;
}

var a;
var b = 1;
var c = { value: 2 };
var d = c;
f(a);
f(b);
f(c);
console.log(a, b, c.value, d.value);
