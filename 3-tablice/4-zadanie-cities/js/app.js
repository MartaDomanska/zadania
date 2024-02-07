const cities = require("./cities.js");

// Zadanie 1

const allCities = cities.length;
console.log(`W Polsce jest: ${allCities} miast`);

// Zadanie 2

cities.forEach(city => console.log(`W mieście ${city.name} jest ${city.people} ludności.`));

// Zadanie 3

const cityMoreThanThenThousand = cities.find(city => city.people > 1000);
console.log(cityMoreThanThenThousand);

// Zadanie 4

const allPeople = cities.reduce((acc, city) => acc + city.people, 0);
console.log(allPeople);

const avgPeople = allPeople / cities.length;
console.log(avgPeople);

const citiesMoreThanAvg = cities.filter(city => city.people > avgPeople);
console.log(citiesMoreThanAvg);

const namesCitiesMoreThanAvg = citiesMoreThanAvg.map(city => city.name);
console.log(namesCitiesMoreThanAvg);

// Zadanie 5

const allCitiesMoreThanThousand = cities.filter(city => city.people > 10000);
console.log(allCitiesMoreThanThousand);

const namesCitiesMoreThanThousand = allCitiesMoreThanThousand.map(city => city.name);
console.log(namesCitiesMoreThanThousand);

// Zadanie 6

const allCitiesLessThanThousand = cities.filter(city => city.people < 1000);
console.log(allCitiesLessThanThousand);

if(allCitiesMoreThanThousand > allCitiesLessThanThousand) {
    console.log("Więcej miast ma więcej niż 1000 ludności");
} else {
    console.log("Więcej miast ma mniej niż 1000 ludności");
}

