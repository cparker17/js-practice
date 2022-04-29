/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Chris");
console.log("38");

let firstName = "Chris";
console.log(firstName);

let myFirstJob = "Contractor";
let myNextJob = "Programmer";


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);

javascriptIsFun = "YES";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

// let, const and var
let age = 30;
age = 31;
const birthYear = 1984;
// birthYear = 1990;
var job = "programmer";
job = "contractor";

// basic operators
const now = 2037;
const ageChris = now - 1984;
const ageSarah = now - 2018;
console.log(ageChris, ageSarah);
console.log(ageChris * 2, ageChris / 2, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Chris";
const lastName = "Parker";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 15;
x *= 4;
x++;
x--;
console.log(x);

//comparison operators
console.log(ageChris > ageSarah);
console.log(now - 1991);
console.log(now);

// operator precedence
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);


// strings and template literals
const firstName = "Chris";
const job = "contractor";
const birthYear = 1984;
const currentYear = 2022;

const chris =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year old " +
  job +
  "!";
console.log(chris);

const chrisNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(chrisNew);

console.log(`Just a regular string...`);

// taking decisions: if/else statements
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start her driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young.  Wait another ${yearsLeft} years. ☹️`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type conversion and coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

console.log("I am " + 38 + " years old"); //converts number to string
console.log("I am " + "38" + " years old");
console.log("23" - "10" - 3); //converts strings to numbers
console.log("23" * "2"); //converts both strings to numbers

let n = "1" + 1;
n = n - 1;
console.log(n);

//truthy and falsy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Chris"));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

//equality operators
const age = "18";
if (age === 18) console.log("You just became an adult.");

if (age == 18) console.log("You just became an adult.");

const favoriteNum = prompt("What is your favoite number?");
console.log(favoriteNum);
console.log(typeof favoriteNum);

if (favoriteNum === 23) {
  console.log("Cool!  23 is an amazing number!");
}

if (favoriteNum != 23) {
  console.log("Why not 23?");
}

// boolean logic
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else shoudl drive...");
}

// logical operators
const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/
// switch statement
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code expamples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend)");
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code expamples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend)");
} else {
  console.log("Not a valid day!");
}

// conditional (ternary) operator
const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");
