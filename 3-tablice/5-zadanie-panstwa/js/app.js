const countries = require("./data.js");

// Zadanie 1

countries.forEach((country) => {
  // console.log(country.name);
});

const population = countries.reduce((acc, country) => acc + country.population, 0);
// console.log(`Łączna liczba ludności w Państwach wynosi: ${population} ludzi.`);

// Zadanie 2

const countriesAvg = population / countries.length;
// console.log(`Średnia ludność w Państwach to: ${countriesAvg} ludzi.`);

// Zadanie 3

const positiveGrowth = countries.filter((country) => country.grow > 0);
// console.log(`Liczba Państw z dodatnim wzrostem wynosi: ${positiveGrowth.length}`);

// Zadanie 4

const negativeGrowth = countries.filter((country) => country.grow < 0);
// console.log(`Liczba Państw z ujemnym wzrostem wynosi: ${negativeGrowth.length}`);

// Zadanie 5

const allPercentagePopulationInWorld = countries.reduce((acc, country) => {
  return acc + country.world_area_in_percent;
}, 0);
// console.log(`Procentowa powierzchnia wszystkich Państw na świecie wynosi: ${allPercentagePopulationInWorld}%`);

// Zadanie 6

const countriesWithFertilityRate = countries.filter(country => country.fertility_rate !== null);
// console.log(countriesWithFertilityRate);

const sumOfFertilityRate = countries.reduce((sum, country) => {
  return sum + country.fertility_rate;
}, 0);
// console.log(sumOfFertilityRate);

const averageFertilityRate = sumOfFertilityRate / countriesWithFertilityRate.length;
// console.log(averageFertilityRate);

// Zadanie 7

const countryWithMediumAge = countries.filter(country => country.medium_age !== null);
const sumMediumAge = countries.reduce((age, country) => {
  return age + country.medium_age;

}, 0);
const averageMediumAgeInWorld =  sumMediumAge  / countryWithMediumAge.length;
// console.log(averageMediumAgeInWorld);

// Zadanie 8

const dataPoland = countries.find(country => country.name === "Poland");
// console.log(dataPoland);

// Zadanie 9

const averageMediumAgeInPoland = dataPoland.medium_age;
// console.log(averageMediumAgeInPoland);

if (averageMediumAgeInPoland > averageMediumAgeInWorld) {
  console.log("Średnia wieku w Polsce jest wyższa niż na świecie");
} else {
  console.log("Średnia wieku w Polsce jest niższa niż na świecie");
}