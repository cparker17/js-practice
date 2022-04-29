// data 1
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// data 2
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// coding challenge #2
if (bmiJohn > bmiMark) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
} else {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
}

// coding challenge #3
const dolphinsAvgScore = (96 + 108 + 89) / 3;
const koalasAvgScore = (88 + 91 + 110) / 3;

if (dolphinsAvgScore > koalasAvgScore) {
  if (dolphinsAvgScore < 100) {
    console.log("No winner!");
  } else {
    console.log(
      `Dolphins are the winner with an average score of ${dolphinsAvgScore}`
    );
  }
} else if (dolphinsAvgScore < koalasAvgScore) {
  if (koalasAvgScore < 100) {
    console.log("No winner!");
  } else {
    console.log(
      `Koalas are the winnder with an average score of ${koalasAvgScore}`
    );
  }
} else {
  if (koalasAvgScore >= 100 && dolphinsAvgScore >= 100) {
    console.log("Tie game!");
  } else {
    console.log("No winner!");
  }
}

// coding challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }.`
);
