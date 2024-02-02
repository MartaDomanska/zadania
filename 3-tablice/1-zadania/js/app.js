// Zadanie 1

const animals = ["Alligator", "Bear", "Cat", "Dog", "Lion", "Sheep"];

function showArray(arr) {
  let sum = 0;

  // pętla for
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i].length);
    sum += arr[i].length;
  }
  console.log(sum);

  // pętla for of

  for (const animal of arr) {
    console.log(animal);
    console.log(animal.length);
    sum += animal.length;
  }
  console.log(sum);

  // metoda forEach

  arr.forEach((element) => {
    console.log(element);
    console.log(element.length);
    sum += element.length;
  });
  console.log(sum);
}
showArray(animals);

// Zadanie 2

function checkPalindrom(txt) {
  let reverseTxt = txt.split("").reverse().join("");
  return reverseTxt === txt;
}
console.log(checkPalindrom("kajak"));
console.log(checkPalindrom("kot"));
console.log(checkPalindrom("Ala"));

// Zadanie 3

const names = [
  "Marcin",
  "Ania",
  "Monika",
  "Piotr",
  "Beata",
  "ania",
  "marcin",
  "piotr",
  "PIOTR",
  "ANIA",
  "MONIKA",
];

function unifyNames(names) {
  return names.map((name) => name.toLowerCase());
}
// console.log(unifyNames(names));

function countDifferentNames(names) {
  const obj = {};

  names.forEach((name) => {
    if (obj[name]) {
      obj[name]++;
    } else {
      obj[name] = 1;
    }
  });
  return obj;
}

const countedNames = countDifferentNames(unifyNames(names));
console.log(countedNames);

// Zadanie 4

function random(max) {
  return Math.floor(Math.random() * max);
}

let arrRandom = [];
for (let i = 0; i < 20; i++) {
  arrRandom.push(random(100));
}
console.log(arrRandom);
const sortedArr = arrRandom.sort((a, b) => a - b);
console.log(sortedArr);
const sumArr = sortedArr.reduce((a, b) => a + b);
const avgArr = sumArr / sortedArr.length;
console.log(avgArr);

// Zadanie 5

const tab = [
  "xloremipsumdolor",
  "kloremipsum",
  "aloremipsumdol",
  "blor",
  "cloremipsu",
  "gloremip",
];

const sortedTab = tab.sort((a, b) => a.length - b.length);
console.log(sortedTab);

sortedTab.forEach((element) => {
  console.log(`Element ${element} ma ${element.length} liter`);
});

// Zadanie 6

const tabUsers = [
  { name: "Marcin", age: 14 },
  { name: "Piotr", age: 18 },
  { name: "Weronika", age: 20 },
  { name: "Ania", age: 19 },
  { name: "Agnieszka", age: 13 },
  { name: "Magda", age: 30 },
];

if (tabUsers.age < 18) {
  console.log("same małolaty");
} else {
  const adultUsers = tabUsers.filter((user) => user.age >= 18);
  adultUsers.sort((a, b) => a.age - b.age);
  console.log(adultUsers);
}

// Zadanie 7

function generateArray() {
  const arr = [];
  for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}
console.log(generateArray());

function splitArray(tab, nr) {
  const arr = [];
  for (let i = 0; i < tab.length; i += nr) {
    arr.push(tab.slice(i, i + nr));
  }
  return arr;
}
console.log(splitArray(generateArray(), 6));

// Zadanie 8

const arr = [
  [66, 97, 114, 100, 4, 2, 110, 11, 1, 6, 20],
  [99, 3, 10, 122, 76, 101, 111, 3, 32, 100, 0],
  [6, 22, 1, 111, 32, 10, 110, 7, 97, 97, 67],
  [60, 97, 116, 32, 100, 23, 97, 114, 100, 32, 34],
  [2, 106, 15, 6, 111, 56, 80, 20, 10, 86, 10],
  [20, 110, 121, 32, 107, 55, 50, 99, 110, 105, 8],
  [12, 9, 22, 102, 66, 100, 12, 105, 50, 76, 110],
  [42, 81, 123, 92, 26, 98, 20, 1, 20, 11, 10],
];

const str = "rrrdddllddrrruuuurrddrruurddddlld";

function decode(arr, str) {
  let x = 0;
  let y = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "r") {
      x++;
    } else if (str[i] === "l") {
      x--;
    } else if (str[i] === "u") {
      y--;
    } else if (str[i] === "d") {
      y++;
    }
    result += String.fromCharCode(arr[y][x]);
  }
  return result;
}
console.log(decode(arr, str));