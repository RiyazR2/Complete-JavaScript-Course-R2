'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Selecting Score Element
const score0El = document.getElementById('score--0'); //43
const score1El = document.getElementById('score--1'); //24

// Setup initial value to score of players
let scores, activePlayer, currentScore, playing;
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

// Selecting dice Element and hidding the Dice image at initial stage

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //(if AP is 0 then switch to 1 or if AP is not zero 0 i.e 1 then switch to 0)

  // toggle :- if class 'player--active' then it remove if it not active then it add it
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generating Random Number for Dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Removing Hided Dice image i.e Displaying Dice
    diceEl.classList.remove('hidden');

    //Manipulating HTML img src Attribute
    diceEl.src = `dice-${dice}.png`; // this is indirectly name of the Dice images

    // Check For Rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // current0El.textContent = currentScore;
    } else {
      // Switch Player

      switchPlayer();
    }
  }
});
//

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    //   scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
