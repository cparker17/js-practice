// values and variables
let country = "USA";
let continent = "North America";
let population = 350_000_000;
console.log(country);
console.log(continent);
console.log(population);

// data types
let isIsland = false;
let language;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// let, const, var
const franceLanguage = "french";
//franceLanguage = "english";

// basic operators
let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(++population);
console.log(population > 6_000_000);
console.log(population < 33_000_000);
let description =
  "Porutgal is in Europe, and its 11 million people speak portuguese";
console.log(description);

//strings and template literals
description =
  "Porutgal is in Europe, and its 11 million people speak portuguese";
console.log(description);

// type conversion and coercion
//4
//617
//23
//false
//1143

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// equality operators
// const numNeighbors = prompt("How many neighbors does your country have?");
// if (Number(numNeighbors) === 1) {
//   console.log("Only 1 border!");
// } else if (Number(numNeighbors) > 1) {
//   console.log("More than 1 border.");
// } else {
//   console.log("No borders.");
// }

// logical operators
if (language === "english" && !isIsland && population < 50_000_000) {
  console.log(`You should live in ${country}.`);
} else {
  console.log(`${country} does not meet your criteria.`);
}
