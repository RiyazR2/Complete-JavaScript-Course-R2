'use strict';

// Selecting Player Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Selecting Buttons Element
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Selecting Current(value) Element
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Selecting Score Element
const score0El = document.getElementById('score--0'); //43
const score1El = document.getElementById('score--1'); //24

const diceEl = document.querySelector('.dice');

// Declare Variables outside from block to use in different different Functions
let scores, activePlayer, currentScore, playing;

// Starting/Initial Conditions or Reseting Game Value
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

// Invoking init() function for starting page i.e initial values
init();

// Selecting dice Element and hidding the Dice image at initial stage

// Function for Switching player (Button Hold, dice=1)
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  //(if AP is 0 then switch to 1 or if AP is not zero 0 i.e 1 then switch to 0)
  activePlayer = activePlayer === 0 ? 1 : 0;

  // toggle :- if class 'player--active' then it remove if it not active then it add it
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  //i.e when game started &  game is not finished
  if (playing) {
    // Generating Random Number for Dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Removing Hided Dice image i.e Displaying Dice
    diceEl.classList.remove('hidden');

    //Manipulating HTML img src Attribute
    diceEl.src = `dice-${dice}.png`; // this is indirectly name of the Dice images

    // Check For Rolled 1
    if (dice !== 1) {
      currentScore += dice; // Add dice value to currentScore
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // i.e current0El or current1El.textContent = currentScore;
    } else {
      switchPlayer(); // Calling switchPlayer if dice === 1
    }
  }
});

btnHold.addEventListener('click', function () {
  // i.e when game started &  game is not finished
  if (playing) {
    //Add current score to ActivePlayer Score
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Check's is Player Score is Greater than or Equal to 20
    if (scores[activePlayer] >= 20) {
      // Game is Finish if this condition is TRUE

      playing = false; //i.e buttons are not clickable

      diceEl.classList.add('hidden'); // Dice Hidded

      // Player Winner CSS style Class added
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      //Removing Active Player becouse it game is won and finished
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer(); //Calling switchPlayer if dice === 1
    }
  }
});

//New Game Button i.e Restart
btnNew.addEventListener('click', init);
