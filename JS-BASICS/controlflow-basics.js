// Hour
// If hour is between 6am to 12pm: Good Morning
// If hour is between 12pm to 6pm: Goo Afternoon
// Otherwise: Good Evening

//--------If else conditional...
let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning....");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon...");
} else {
  console.log("Good Evening...");
}

//---- Switch case conditional

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User...");
    break;
  case "moderator":
    console.log("Moderator User....");
    break;
  default:
    console.log("Unknown User....");
}

//--- For loop

for (let i = 0; i < 5; i++) {
  console.log("Hello World...", i);
}

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//--While Loop

// let z = 0;
// while (z <= 5) {
//   if (z % 2 !== 0) {
//     console.log("While", z);
//   }
//   z++;
// }

//-- Do While Loop
let q = 9;
do {
  if (q % 2 !== 0) console.log("While", q);
  q++;
} while (q <= 5);

let y = 0;
while (y < 5) {
  console.log(y);
  y++;
}

//--- for-in Loop

const person = {
  name: "mosh",
  age: 30
};

for (let key in person) console.log(key, person[key]);

const colors = ["Blue", "Yellow", "White"];

for (let index in colors) console.log(index, colors[index]);

//-- for-of loop
for (let color of colors) console.log(color); // objects not iteratable so use for in

// --- Break and Countinue

let b = 0;
while (b <= 10) {
  if (b === 5) break;

  if (b % 2 === 0) {
    b++;
    continue;
  }
  console.log(b);
  b++;
}
