// Exercise 1: Sum of Arguments

console.log(sum([1, 2, 3, 4, 5]));

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

// Exercise 2: Area of Circle

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);

let v1 = 3.4;

if (v1 > 3.4) {
  console.log("va is greater the 3.4.6");
}
