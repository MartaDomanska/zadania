// Zadanie 1


const rectangle = {
  width: 10,
  height: 10,
  showArea: function () {
    return this.width * this.height;
  },
};

const circle = {
  radius: 5,
  showArea: function () {
    return this.radius * this.radius * Math.PI;
  },
};

// console.log(`Kwadrat ma szerokość ${rectangle.width} i wysokość ${rectangle.height} Jego pole to ${rectangle.showArea()}`);
// console.log(`Koło ma promień ${circle.radius} Jego pole to ${circle.showArea()}`);


// Zadanie 2


 const currentUser = {
  name: "Adam",
  surname: "Nowak",
  email: "adam-nowak@gmail.com",
  www: "www.adamnowak.com",
  userType: "Admin",
  isActive: true,
  show: function () {
    // console.log(
    //   `Imię: ${this.name}, Nazwisko: ${this.surname}, Email: ${this.email}, Strona WWW: ${this.www}, Typ użytkownika: ${this.userType}, Aktywny: ${this.isActive}`
    // );
  },
  setActive: function (active) {
    this.isActive = active;
  },
};
currentUser.show();
currentUser.setActive(false);


// Zadanie 3

/**
 const book = {
  title: "Pan Tadeusz",
  author: "Adam Mickiewicz",
  pageCount: 376,
  publisher: "Wydawnictwo Świat Książki",
  showDetails: function(){
    console.log("-------for in--------");
      for (const key in this) {
          if(typeof this[key] !== 'function') {
              // console.log(`${key}: ${this[key]}`);
           }
       }
    
    console.log("-------Object.keys()--------");
    for (const key of Object.keys(this)) {
        if(typeof key !== 'function') {
        //  console.log(key);
        }
    }
    
    console.log("-------Object.values()--------");
    for (let value of Object.values(this)) {
      if(typeof value !== 'function') {
        //  console.log(value);
        }
    }

    console.log("-------Object.entries()--------");
    for (const [key, value] of Object.entries(this)) {
        if(typeof value !== 'function') {
            // console.log(key, value);
        }
    }
  }
}
book.showDetails();
 */



// Zadanie 4

const spaceShip = {
  name: "Enterprise",
  currentLocation: "Earth",
  flyDistance: 0,
  flyTo: function (place, distance) {
    this.currentLocation = place;
    this.flyDistance += distance;
  },
  showInfo: function () {
    // console.log(`Statek ${this.name} doleciał do miejsca ${this.currentLocation} Statek przeleciał już całkowity dystans ${this.flyDistance}`);
  },
  meetClingon: function () {
    let positiveResults = 0;
    for (let i = 0; i < 100; i++) {
      if (Math.random() > 0.5) {
        positiveResults++;
      }
    }

    if (positiveResults >= 50) {
      // console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
    } else {
      // console.warn(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
    }
  },
};
spaceShip.flyTo("Mars", 120);
spaceShip.showInfo();
spaceShip.meetClingon();

// Zadanie 5

const book = {
  users: [],
  addUser: function (name, age, phone) {
    this.users.push({ name, age, phone });
  },
  showUsers: function () {
    this.users.forEach((user) => {
      console.log(
        `Wszyscy użytkownicy w książce: Imię: ${user.name}, Wiek: ${user.age}, Telefon: ${user.phone}`
      );
    });
  },
  findByName: function (name) {
    const user = this.users.find((user) => user.name === name);
    if (user) {
      console.log(
        `Pierwszy użytkownik o imieniu ${name} to: Imię: ${user.name}, Wiek: ${user.age}, Telefon: ${user.phone}`
      );
    } else {
      console.log(false);
    }
  },
  findByPhone: function (phone) {
    const user = this.users.find((user) => user.phone === phone);
    if (user) {
      console.log(
        `Pierwszy użytkownik o numerze telefonu ${phone} to: Imię: ${user.name}, Wiek: ${user.age}, Telefon: ${user.phone}`
      );
    } else {
      console.log(false);
    }
  },
  getCount: function () {
    console.log(`Liczba użytkowników w książce to: ${this.users.length}`);
  },
};

book.addUser("Adam", 25, 123456789);
book.addUser("Ewa", 30, 987654321);
book.showUsers();
book.findByName("Adam");
book.findByPhone(987654321);
book.getCount();

// Zadanie 6

const tableGenerator = {
  randomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  generateIncTable: function (nr) {
    let arr = [];
    for (let i = 0; i <= nr; i++) {
      arr.push(i);
    }
    return arr;
  },
  generateRandomTable: function (lng, min, max) {
    let arr = [];
    for (let i = 0; i < lng; i++) {
      arr.push(this.randomNumber(min, max));
    }
    return arr;
  },
  generateTableFromText: function (str) {
    return str.split(" ");
  },
  getMaxFromTable: function (arr) {
    return Math.max(...arr);
  },
  getMinFromTable: function (arr) {
    return Math.min(...arr);
  },
  delete: function (arr, index) {
    arr.splice(index, 1);
    return arr;
  },
};
console.log(tableGenerator.randomNumber(1, 10));
console.log(tableGenerator.generateIncTable(10));
console.log(tableGenerator.generateRandomTable(10, 1, 10));
console.log(tableGenerator.generateTableFromText("Ala ma kota"));
console.log(tableGenerator.getMaxFromTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(tableGenerator.getMinFromTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(tableGenerator.delete([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// Zadanie 7

const text = {
  check: function (txt, word) {
    return txt.includes(word);
  },
  getCount: function (txt) {
    return txt.length;
  },
  getWordsCount: function (txt) {
    return txt.split(" ").length;
  },
  setCapitalize: function (txt) {
    return txt
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  setMix: function (txt) {
    let str = "";
    for (let i = 0; i < txt.length; i++) {
      if (i % 2 === 0) {
        str += txt[i].toUpperCase();
      } else {
        str += txt[i].toLowerCase();
      }
    }
    return str;
  },
  generateRandom: function(lng) {
    let str = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < lng; i++) {
      str += char.charAt(Math.floor(Math.random() * char.length));
    }
    return str;
  } 
};
console.log(text.check("Ala ma kota", "kota"));
console.log(text.getCount("Ala ma kota"));
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.setCapitalize("ala ma kota"));
console.log(text.setMix("ala ma kota"));
console.log(text.generateRandom(10));