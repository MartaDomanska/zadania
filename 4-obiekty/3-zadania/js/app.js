// Zadanie 1

class User {
  constructor(nick, name, surname, email, role) {
    this.nick = nick;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.loginDates = [];
    this.active = true;
  }

  logIn() {
    let currentDate = new Intl.DateTimeFormat("pl-PL", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(new Date());
    this.loginDates.push(currentDate);
  }

  showLoginDates() {
    this.loginDates.forEach((date) => console.log(date));
  }

  showDetails() {
    for (const key in this) {
      if (typeof this[key] === "function") {
        // console.log(`${key}: ${this[key]}`);
      }
    }
  }

  toggleActive() {
    this.active = !this.active;
  }

}

let user = new User("nick123", "John", "Doe", "john.doe@example.com", "admin");
// console.log(user);
// user.logIn();
// console.log(user.loginDates);
// user.showLoginDates();
user.showDetails();
user.toggleActive();
// console.log(user.active);

let users = [
  new User("nick3234", "Joseph", "Smith", "joseph32@gmail.com", "editor"),
  new User("emma", "Emma", "Watson", "emma@onet.pl", "reader"),
  new User("james", "James", "Bond", "bond007@gmail.com", "admin"),
];

// Zadanie 2

const names = [
  "Baraka",
  "Jax",
  "Johnny Cage",
  "Kitana",
  "Kung Lao",
  "Liu Kang",
  "Mileena",
  "Raiden",
  "Reptile",
  "Scorpion",
  "Shang Tsung",
  "Sub-Zero",
];

class Fighter {
  constructor(name, live, power) {
    this.name = name;
    this.live = live;
    this.power = power;
  }

  attack(who) {
    if (Math.random() < 0.5) {
      who.live -= this.power;
      let message = `${this.name} zaatakował ${who.name}. ${this.name} ma ${this.live} życia, a ${who.name} ma ${who.live} życia.`;
      // console.log(message);
      log.push(message);
    } else {
      let message = `${this.name} nie trafił w ${who.name}. ${this.name} ma ${this.live} życia, a ${who.name} ma ${who.live} życia.`;
      // console.log(message);
      log.push(message);
    }
  }
}

// Tworzenie tablicy fighterów
let fighters = names.map((name) => new Fighter(name, 100, 20));

// Tworzenie tablicy logów
let log = [];

// Eksperymentowanie z metodami
fighters[0].attack(fighters[1], log);

// Wyświetlanie logów
// console.log(log);

let log2 = [];
let fighters2 = names.map((name) => new Fighter(name, 20, 3));
// console.log(fighters2);

const getFighter = () => {
  let index = Math.floor(Math.random() * fighters2.length);
  return fighters2[index];
};
// console.log(getFighter());

function loop() {
    let leftFighter = null;
    let rightFighter = null;

    while (fighters.length > 0) {
        // Pobierz nowych wojowników, jeśli to konieczne
        if (!leftFighter) {
            leftFighter = fighters.pop();
        }
        if (!rightFighter) {
            rightFighter = fighters.pop();
        }

        // Losowa walka
        if (Math.random() < 0.5) {
            leftFighter.attack(rightFighter);
        } else {
            rightFighter.attack(leftFighter);
        }

        // Sprawdź, czy któryś z wojowników ma 0 życia
        if (leftFighter.live <= 0) {
            leftFighter = null;
        }
        if (rightFighter && rightFighter.live <= 0) {
            rightFighter = null;
        }

        // Przywróć życie wojownikowi, jeśli jego przeciwnik jest null
        if (leftFighter && !rightFighter) {
            leftFighter.live = 20;
        }
        if (rightFighter && !leftFighter) {
            rightFighter.live = 20;
        }

        // Wyświetl log
        // console.clear();
        // console.log(log);

        // Sprawdź, czy któryś z wojowników jest null i czy w tablicy są jeszcze wojownicy
        if ((leftFighter === null || rightFighter === null) && fighters.length === 0) {
            log.push('Na polu walki pozostał zwycięzca.');
            return false;
        }
    }

    setTimeout(() => loop(), 100);
}

loop();

// Zadanie 3

String.prototype.sortText = function (char) {
  return this.split(char).sort().join(char);
};
// console.log("Marcin-Ania-Piotrek-Beata".sortText('-'));

// Zadanie 4

String.prototype.mirror = function () {
  return this.split('').reverse().join('');
}
console.log("Ala ma kota".mirror());

// Zadanie 5

Array.prototype.sum = function () {
  return this.reduce((prev, curr) => prev + curr);
}
console.log([1,2,3].sum());

Array.prototype.sortNr = function () {
  return this.sort((a, b) => a - b);
}
console.log([1,1.2,11,22,2.1].sortNr());