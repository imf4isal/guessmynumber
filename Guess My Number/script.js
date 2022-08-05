'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const text = function (cls, text) {
  document.querySelector(cls).textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    text('.message', 'No Number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      text('.message', guess > secretNumber ? 'Too High!' : 'Too Low');
      score--;
      text('.score', score);
    } else {
      text('.message', 'You lost the game!');
      text('.score', 0);
    }
  } else {
    text('.message', 'Your guess is Correct!');
    text('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';

    if (score > highScore) {
      highScore = score;
      text('.highscore', score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  text('.message', 'start guessing..');
  text('.score', score);
  text('.number', '?');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
