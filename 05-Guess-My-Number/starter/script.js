'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
let highScore = 0;

document
  .querySelector('.check')
  .addEventListener('click', () =>
    console.log(document.querySelector('.guess').value)
  );

// when there is no input
if (!guess) {
  document.querySelector('.message').textContent = 'No number!';

  // when player wins
} else if (guess === secretNumber) {
  document.querySelector('body').style.backgroundColor = '#60b347';

  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.message').textContent = 'Correct Number!';

  if (score > highScore) {
    highScore = score;
  }
  document.querySelector('.highscore').textContent = highScore;

  // when guess too high
} else if (guess > secretNumber) {
  if (score > 1) {
    document.querySelector('.message').textContent = 'Too high!';
    document.querySelector('.score').textContent = --score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
  }

  // when guess too low
} else if (guess < secretNumber) {
  if (score > 1) {
    document.querySelector('.message').textContent = 'Too low!';
    document.querySelector('.score').textContent = --score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
  }
}
