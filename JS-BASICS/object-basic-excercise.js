// Excercise 1: Address Object
// Street
// City
// Zipcode
// showAddress(address)

// let address = {
//   street: "a",
//   city: "b",
//   zipcode: "c"
// };

// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

// showAddress(address);

// Excercise 2: Factory and Constructor Function

// let address = createAddress("a", "b", "c"); // call Factory Function

// let address = new Address("a", "b", "c"); // call construction function
// console.log(address);
// // Factory function
// function createAddress(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode
//   };
// }

// // Constructor Function
// function Address(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// Exercise 3: Object Equality
// let address1 = new Address("a", "b", "c"); // call construction function
// let address2 = new Address("a", "b", "c");
// let address3 = address1;

// console.log(aresame(address1, address2) + "******");
// console.log(areEqual(address1, address2) + "******");
// console.log(areEqual(address1, address3) + "******");
// // Constructor Function
// function Address(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// function aresame(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipcode === address2.zipcode
//   );
// }

// function areEqual(address1, address2) {
//   return address1 === address2;
// }

// Exercise 4: Blog Post Object
// Title, Body , author, comments, {author, body}, isLive

// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [{ author: "a", body: "b" }, { author: "c", body: "c" }],
//   isLive: true
// };

// console.log(post);

// Exercise 5: Constructor Functions

// let post = new Post("a", "b", "c");

// console.log(post);

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

// Exercise 6: Price Range Object

let priceRange = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 }
];

let restaurants = [{ averagePerPerson: 5 }];
