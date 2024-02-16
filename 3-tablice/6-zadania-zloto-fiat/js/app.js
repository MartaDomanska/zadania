const payments = require("./payments.js");
const gold = require("./gold.js");

// Zadanie 1

const averagePayment = Object.values(payments).reduce((a, b) => a + b) / Object.values(payments).length;
const savings = averagePayment / 3;
console.log(savings.toFixed(2));


// Zadanie 2

const goldPrice = Object.values(gold).find(e =>  e.endDateTime).close;
const coins = savings / goldPrice;

console.log(coins.toFixed(2));