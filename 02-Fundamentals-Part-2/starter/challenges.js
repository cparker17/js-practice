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
