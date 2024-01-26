// # Zadania - różne

// ==========================

// ## Zadanie 1

function countWord(txt) {
  if (txt === "") {
    return "nie mam co liczyć";
  }

  let numberWords = txt.split(" ");
  return `Tekst "${txt}" składa się z ${numberWords.length} wyrazów`;
}

const tekst = prompt("Podaj tekst");
console.log(countWord(tekst));

// ## Zadanie 2

function fixName(name) {
  if (name === "") {
    return "nic nie wpisano";
  } else {
    const mixName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Imię ${mixName} rozpoczyna się od litery ${name
      .charAt(0)
      .toUpperCase()}`;
  }
}
const userName = prompt("Podaj imię");
console.log(fixName(userName));

// ## Zadanie 3

function fileInfo(file) {
  let fileParts = file.split(".");

  if (fileParts.length !== 2) {
    return false;
  }

  let name = fileParts[0];
  let extension = fileParts[1];

  let obj = {
    name: name,
    extension: extension,
  };
  return obj;
}
console.log(fileInfo("image.jpg"));
console.log(fileInfo("imagepng"));
console.log(fileInfo("image.png.jpg"));

// ## Zadanie 4

function generateID() {
  let char = "0123456789ABCDEFGHIJKLMNOPRSTUWXYZabcdefghijklmnopqrstuwxyz";

  let id = "";
  for (let i = 0; i < 20; i++) {
    let random = Math.floor(Math.random() * char.length);
    id += char[random];
  }
  return id;
}
console.log(generateID());

// ## Zadanie 5

function printNumbers(nr) {
  let txt = "";

  for (let i = 1; i <= nr; i++) {
    txt += i;
  }
  return txt;
}
console.log(printNumbers(12));

// ## Zadanie 6

// 1 sposób

// function checkMonth(name, month) {
//   let monthLower = month.toLowerCase();
//   let result = "";

//   switch (monthLower) {
//     case "grudzien":
//     case "styczen":
//     case "luty":
//       result = `${name} jezdzi na sankach`;
//       break;
//     case "marzec":
//     case "kwiecien":
//     case "maj":
//       result = `${name} chodzi po kaluzach`;
//       break;
//     case "czerwiec":
//     case "lipiec":
//     case "sierpien":
//       result = `${name} sie opala`;
//       break;
//     case "wrzesien":
//     case "pazdziernik":
//     case "listopad":
//       result = `${name} zbiera liscie`;
//       break;
//     default:
//       result = `${name} uczy się JS`;
//       break;
//   }

//   return result;
// }
// console.log(checkMonth("Ala", "grudzien"));

// 2 sposób

function checkMonth(name, month) {
  let monthLower = month.toLowerCase();

  if (
    monthLower === "grudzien" ||
    monthLower === "styczen" ||
    monthLower === "luty"
  ) {
    return `${name} jezdzi na sankach`;
  } else if (
    monthLower === "marzec" ||
    monthLower === "kwiecien" ||
    monthLower === "maj"
  ) {
    return `${name} chodzi po kaluzach`;
  } else if (
    monthLower === "czerwiec" ||
    monthLower === "lipiec" ||
    monthLower === "sierpien"
  ) {
    return `${name} sie opala`;
  } else if (
    monthLower === "wrzesień" ||
    monthLower === "pazdzietnik" ||
    monthLower === "listopad"
  ) {
    return `${name} zbiera liscie`;
  } else {
    return `${name} uczy się JS`;
  }
}
console.log(checkMonth("Marta", "pazdziernik"));

// ## Zadanie 7

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let counter = 0;

for (let i = 0; i < 10; i++) {
  let random = generateRandom(1, 20);

  if (random > 10) {
    counter++;
  }
}

if (counter > 5) {
  console.log("udało się");
} else {
  console.log("niestety nie");
}

// ## Zadanie 8

function generateRandomTable(min, max, count) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(generateRandom(min, max));
  }

  return arr;
}

const randomTable = generateRandomTable(10, 100000, 10);

for (let i = 0; i < randomTable.length; i++) {
  console.log(randomTable[i].toString().padStart(10, "_"));
}

// ## Zadanie 9

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

function sortString(tekst, char) {
  let arr = tekst.split(char);
  arr.sort();
  return arr.join(char);
}
console.log(sortString(str, "|"));

// ## Zadanie 10

function printBorderText(txt, max) {
  if (txt.length > max) {
    txt = txt.slice(0, max) + "...";
  }

  let border = "";
  for (let i = 0; i < txt.length + 4; i++) {
    border += "═";
  }

  return `╔${border}╗\n║  ${txt}  ║\n╚${border}╝`;
}
console.log(printBorderText("To jest jakiś tekst", 10));

// ## Zadanie 11

const min = 1;
const max = 1000;

let userNumber = prompt(`Podaj liczbę od ${min} do ${max}`);
userNumber = parseInt(userNumber);

if(userNumber < min || userNumber > max || isNaN(userNumber)) {
    console.log("podana wartość jest błędna");
} else {
    let randomCount = 0;
    
    while(true) {
        let randomNumber = generateRandom(min, max);
        randomCount++;

        if(randomNumber === userNumber) {
            break;
        }
    }
    console.log(`Wylosowano ${userNumber} po ${randomCount} próbach`);
}


// ## Zadanie 12

function checkFemale(name) {
  return name.charAt(name.length - 1) === "a";
}
console.log(checkFemale("Ania"));
console.log(checkFemale("Marcin"));

const users = [
  "Ania Nowak",
  "Piotr Kowalski",
  "Bartek Kosecki",
  "Natalia Nowak",
  "Weronika Piotrowska",
  "Agata Karolak",
  "Tomasz Nowak",
  "Mateusz Kowalski",
  "Marcin Kotecki",
  "Beata Lecka",
  "Katarzyna Małecka",
];

function countWomanInTable(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].split(" ")[0];

    if (checkFemale(name)) {
      counter++;
    }
  }
  return counter;
}
console.log(countWomanInTable(`Liczba kobiet wynosi: ${users}`));

// ## Zadanie 13

function monthName(nr) {
  const months = [
    "styczen",
    "luty",
    "marzec",
    "kwiecien",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpien",
    "wrzesien",
    "pazdziernik",
    "listopad",
    "grudzien",
  ];

  if (nr >= 1 && nr <= 12) {
    return months[nr - 1];
  } else {
    return false;
  }
}
console.log(monthName(10));
console.log(monthName("ala"));

// ## Zadanie 14

function checkPalindrome(txt) {
  let txtLower = txt.toLowerCase();
  let txtReverse = txtLower.split("").reverse().join("");

  return txtLower === txtReverse;
}
console.log(checkPalindrome("kajak"));
console.log(checkPalindrome("pies"));


// ## Zadanie 15


function mix(txt) {
  let mixTxt = "";

  for (let i = 0; i < txt.length; i++) {
    if (i % 2 === 0) {
      mixTxt += txt[i].toUpperCase();
    } else {
      mixTxt += txt[i].toLowerCase();
    }
  }
  return mixTxt;
}
console.log(mix("Ala ma kota"));

function smallNames(arr) {
  let smallNames = [];

  for (let i = 0; i < arr.length; i++) {
    smallNames.push(arr[i].toLowerCase());
  }
  return smallNames;
}
console.log(smallNames(["Ania", "Marcin", "Bartek", "Piotr"]));

function bigNames(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
}

console.log(bigNames(["Ania", "Marcin", "Bartek", "Piotr"]));


// ## Zadanie 16


function arrayobj(arr) {
  const obj = {
    sum: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
    obj.sum += arr[i];
  }
  return obj;
}

const tab = [1, 1, 1, 2, 2, 1, 3, 3, 5, 7, 5];
console.log(arrayobj(tab));


// ## Zadanie 17


function log() {
  let count = 1;

  return function (txt) {
    console.log(count + ". " + txt);
    count++;
  };
}

const logger = log();

logger("To jest przykładowy tekst.");
logger("To jest kolejny przykładowy tekst.");
logger("To jest jeszcze jeden przykładowy tekst.");