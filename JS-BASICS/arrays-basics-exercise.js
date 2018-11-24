// Exercise 1: Array from Range
// const numbers = arrayFromRange(-1, 5);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   let output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

// Exercise 2: Includes

// const numbers = [2, 3, 4, 5];
// console.log(includes(numbers, 8));
// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

// Exercise 3: Expect

// const numbers = [1, 2, 3, 4];

// console.log(except(numbers, [1, 3]));
// function except(array, exclude) {
//   const output = [];
//   for (let element of array)
//     if (!exclude.includes(element)) output.push(element);
//   return output;
// }

// Exercise 4: Moving an Element

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 3);
// console.log(output);
// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error("Invalid Offset...");
//     return;
//   }
//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

// Excercise 5: Count Occurrences

// const numbers = [1, 2, 3, 4, 4, 4, 1];

// const count = countOccurences(numbers, 4);
// console.log(count);

// function countOccurences(array, searchElement) {
// using normal logic
// let count = 0;
// for (let element of array) if (element === searchElement) count++;
// return count;

// Using reduce method

//   return array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurrence;
//   }, 0);
// }

// Exercise 6: Get MAX

const numbers = [1, 2, 3, 4, 5];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;
  // let max = array[0];
  // for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
  // return max;

  // Using reduce
  return array.reduce((a, b) => (a > b ? a : b));
}

// Exercise 7: Movies
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4 },
  { title: "e", year: 2017, rating: 5 }
];

// All the moview in 2018 with rating >4
// Sort them by their rating
// Descending order
// Pick their title

const titles = movies
  .filter(m => m.year === 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);
