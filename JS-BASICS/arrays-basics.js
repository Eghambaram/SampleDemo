// Adding Array Elements
// const numbers = [3, 4];
//End
// numbers.push(5, 6);
// // Beginning
// numbers.unshift(1, 2);
// // Middle
// numbers.splice(1, 0, "a", "b");
// console.log(numbers);

// Finding Elements in Array

// const numbers = [1, 2, 3, 4, 1];

// console.log(numbers.indexOf(1));

// console.log(numbers.indexOf(1, 2));

// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(4));

// Finding Elements in Array(Reference Type)

// const courses = [{ id: 1, name: "a" }, { id: 2, name: "b" }];
// const course = courses.find(function(course) {
//   // findIndex used to display index value 0
//   return course.name === "a";
// });
// console.log(course);

// Arrow Functions
// const course = courses.find(course => course.name === "a");
// console.log(course);

// Removing Elements in Array
// const numbers = [1, 2, 3, 4];
// // end
// const last = numbers.pop();
// console.log(last);
// // first
// const first = numbers.shift();
// console.log(first);
// // middle
// numbers.splice(3, 3);
// console.log(numbers);

// Combining and Slicing Arrays

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined = first.concat(second);
// const slice = combined.slice(2, 4);
// console.log(combined);
// console.log(slice);

// Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// // const combined = first.concat(second);
// const combined = [...first, "a", ...second, "b"];
// const copy = [...combined];

// console.log(combined, "\n", copy);

// Iterating an Array
// const numbers = [1, 2, 3];
// for (let number of numbers) console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

// Joining Arrays
// const numbers = [1, 2, 3];
// const join = numbers.join("&");
// console.log(join);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);
// const combined = parts.join("-");
// console.log(combined); // URL Sluge

// Sorting Arrays

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// const courses = [{ id: 1, name: "Node.js" }, { id: 2, name: "javascript" }];
// courses.sort((a, b) => {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(courses);

// Testing the Elements of an Array
// const numbers = [1, -2, 3];

// //every() it match all value
// // some() it match only one value
// const allPositive = numbers.every(function(value) {
//   return value >= 0;
// });

// const atLeastOnePresent = numbers.some(function(value) {
//   return value >= 0;
// });

// console.log("AtLeastOne", atLeastOnePresent);

// console.log("AllPositve", allPositive);

// Filtering an Arrays

// const numbers = [1, -2, 3, 4];

// const filtered = numbers.filter(n => n >= 0);
// console.log(filtered);

// Mapping an Array

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);
// // const items = filtered.map(n => "<li>" + n + "</li>");
// // const items = filtered.map(n => ({ value: n }));

// console.log(items);

// const items = numbers
//   .filter(n => n >= 0)
//   .map(n => ({ value: n }))
//   .filter(obj => obj.value > 1)
//   .map(obj => obj.value); // Chaining methods
// // console.log(filtered);
// console.log(items);

// Reducing an Array
// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers) sum += n;
// // or below
// const sum1 = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum1);
