'use strict';

function randomNumberGenerator() {
  return Math.floor(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let randomNumber = randomNumberGenerator();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (guess === randomNumber) {
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.number').style.width = '30rem';
      displayMessage('✅ Correct!');
      document.querySelector('body').style.backgroundColor = '#0c6602';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (!guess) {
      displayMessage('❓ No number!');
    } else {
      score--;
      displayMessage(guess > randomNumber ? '⛔️ Too high!' : '⛔️ Too low!');
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('💥 Game over!');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#8f0404';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = randomNumberGenerator();
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
