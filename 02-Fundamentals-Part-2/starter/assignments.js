"use strict";

// functions
function decscribeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const usaData = decscribeCountry("USA", 350, "Washington D.C.");
console.log(usaData);

const canadaData = decscribeCountry("Canada", 200, "Ottawa");
console.log(canadaData);

const japanData = decscribeCountry("Japan", 100, "Tokyo");
console.log(japanData);

// function declarations and expressions
function percentageOfWorld1(population) {
  return (population / 7_900_000_000) * 100;
}

const usa = percentageOfWorld1(350_000_000);
console.log(`USA percentage is ${usa}%.`);

const canada = percentageOfWorld1(200_000_000);
console.log(`Canada percentage is ${canada}%.`);

const japan = percentageOfWorld1(150_000_000);
console.log(`Japan percentage is ${japan}%.`);

let percentageOfWorld2 = function (population) {
  return (population / 7_900_000_000) * 100;
};

console.log(`USA percentage is ${percentageOfWorld2(350_000_000)}%.`);
console.log(`Canada percentage is ${percentageOfWorld2(200_000_000)}%.`);
console.log(`Japan percentage is ${percentageOfWorld2(150_000_000)}%.`);

// arrow functions
const percentageOfWorld3 = (population) => (population / 7_900_000_000) * 100;

console.log(`USA percentage is ${percentageOfWorld3(350_000_000)}%.`);
console.log(`Canada percentage is ${percentageOfWorld3(200_000_000)}%.`);
console.log(`Japan percentage is ${percentageOfWorld3(150_000_000)}%.`);

// functions calling other functions
let describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} percent of the world.`;

console.log(describePopulation("USA", 350));
console.log(describePopulation("Canada", 200));
console.log(describePopulation("Japan", 150));

// introduction to arrays
let usaPopulation = 350_000_000;
let canadaPopulation = 200_000_000;
let japanPopulation = 150_000_000;
let mexicoPopluation = 250_000_000;
const populations = [
  usaPopulation,
  canadaPopulation,
  japanPopulation,
  mexicoPopluation,
];

populations.length === 4 ? console.log(true) : console.log(false);

const percentages = [
  percentageOfWorld1(usaPopulation),
  percentageOfWorld1(canadaPopulation),
  percentageOfWorld1(japanPopulation),
  percentageOfWorld1(mexicoPopluation),
];

console.log(percentages);

// basic array operations (methods)
const neighbors = ["Canada", "Mexico"];

neighbors.push("Utopia");
neighbors.pop("Utopia");

if (!neighbors.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbors[neighbors.indexOf("Mexico")] = "Unknown";
console.log(neighbors);

// introduction to objects
const myCountry = {
  country: "USA",
  capital: "Washington D.C.",
  language: "english",
  population: 350_000_000,
  neighbors: ["Canada", "Mexico"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} people, ${this.neighbors.length} neighboring countries and a captital called ${this.capital}.`
    );
  },

  checkIsIsland: function () {
    this.isIsland = neighbors.length === 0 ? true : false;
  },
};

console.log(myCountry);

// dot vs. bracket notation
console.log(
  `${myCountry.country} has ${myCountry.population} people, ${myCountry.neighbors.length} neighboring countries and a captital called ${myCountry.capital}.`
);

myCountry.population = myCountry.population + 2_000_000;
console.log(myCountry.population);
myCountry["population"] = myCountry["population"] - 2_000_000;
console.log(myCountry.population);

// object methods
myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry.isIsland);
