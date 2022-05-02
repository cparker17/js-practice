// challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverageScore1 = calcAverage(44, 23, 71);
const koalasAverageScore1 = calcAverage(65, 54, 49);

const dolphinsAverageScore2 = calcAverage(85, 54, 41);
const koalasAverageScore2 = calcAverage(23, 34, 27);

function checkWinner(dolphinsAverageScore, koalasAverageScore) {
  if (dolphinsAverageScore > koalasAverageScore) {
    console.log(
      `Dolphins win (${dolphinsAverageScore} vs ${koalasAverageScore})!`
    );
  } else {
    console.log(
      `Koalas win (${koalasAverageScore} vs ${dolphinsAverageScore})!`
    );
  }
}

checkWinner(dolphinsAverageScore1, koalasAverageScore1);
checkWinner(dolphinsAverageScore2, koalasAverageScore2);

// challenge #2
const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  }
  return billValue * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// coding challenge #3
const mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();
if (mark.BMI > john.BMI) {
  console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})!`);
} else {
  console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!`);
}
