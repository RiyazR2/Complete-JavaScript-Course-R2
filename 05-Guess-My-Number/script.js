'use strict';

/*
// console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let initialScore = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (initialScore > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      initialScore--;
      document.querySelector('.score').textContent = initialScore;
    } else {
      document.querySelector('.message').textContent =
        'Game Over ! \n💥You Lost the GAME';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (initialScore > 1) {
      document.querySelector('.message').textContent = '📈 Too Low!';
      initialScore--;
      document.querySelector('.score').textContent = initialScore;
    } else {
      document.querySelector('.message').textContent =
        'Game Over ! \n💥You Lost the GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
});
