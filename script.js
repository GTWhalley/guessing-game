'use strict';

function randomNumberGenerator() {
  return Math.floor(Math.random() * 20) + 1;
}

let randomNumber = randomNumberGenerator();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (guess === randomNumber) {
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').textContent = '✅ Correct!';
      document.querySelector('body').style.backgroundColor = '#0c6602';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (!guess) {
      document.querySelector('.message').textContent = '❓ No number!';
    } else if (guess > randomNumber) {
      score--;
      document.querySelector('.message').textContent = '⛔️ Too high!';
      document.querySelector('.score').textContent = score;
    } else if (guess < randomNumber) {
      score--;
      document.querySelector('.message').textContent = '⛔️ Too low!';
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💥 Game over!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#8f0404';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = randomNumberGenerator();
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
