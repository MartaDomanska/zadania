const users = require("./data.js");

// Zadanie 1

users.forEach(user => console.log(`${user.name} -> ${user.email}`));

// Zadanie 2

const adults = users.filter(user => user.age >= 18);
console.log(adults);

// Zadanie 3

const usersWomen = users.filter((user) => user.gender === "female");
console.log(usersWomen);

// Zadanie 4

const usersDolor = users.filter(user => user.tags.includes("dolor"));
console.log(usersDolor);

// Zadanie 5

const isAllAdult = users.every(user => user.age >= 18);
console.log(isAllAdult);

// Zadanie 6

const isAdult = users.some(user => user.age >= 18);
console.log(isAdult);

// Zadanie 7

const namesBig = users.map(user => user.name.toUpperCase());
console.log(namesBig);

// Zadanie 8

const allWomen = users.filter(user => user.gender === "female").length;
// console.log(allWomen);

const allMen = users.filter(user =>
user.gender === "male").length;
// console.log(allMen);

if (allWomen > allMen) {
  console.log("Kobiety wygrywają");
} else if (allWomen < allMen) {
  console.log("Mężczyźni wygrywają");
}