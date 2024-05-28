'use strict';

// selecting elements to be reused
const player0El = document.querySelector('.player--1');
const player1El = document.querySelector('.player--0');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// create game starting conditions: scores = 0, no visible die
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// rolling the dice functionality
btnRoll.addEventListener('click', function () {
  //1. generate a random number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. display the die corresponding to the number: manipulate src property
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. add score and check for 1
  if (dice !== 1) {
    // add die roll to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
