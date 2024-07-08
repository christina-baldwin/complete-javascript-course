'use strict';

// selecting elements to be reused
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// set game starting conditions
let scores;
let currentScore;
let activePlayer;
let playing;

const init = function () {
  // set playing to true
  playing = true;
  // set current scores to 0
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // set player scores to 0
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  // remove winner background if applicable
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // set active player to 0 (aka player 1)
  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  // no dice visible
  diceEl.classList.add('hidden');
};
init();

// create a function to switch the player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling the dice functionality
// should only be active when game is playing

btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player's score
    // get score of current player
    // scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if the player's score is >= 100 and end the game
    // set the max score
    if (scores[activePlayer] >= 100) {
      // stop the game from playing
      playing = false;
      // remove visible dice
      diceEl.classList.add('hidden');

      // indicate winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      //.3 switch to the next player if no winner
    } else {
      switchPlayer();
    }
  }
});

// resetting the game
btnNew.addEventListener('click', init);

////////////////////////////
// Game instructions modal
// funstiohn to open the modal and add an overlay by removing the hidden class
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// remove the hidden class from "modal" and "overlay" when one of the modal buttons is clicked so that the modal window is displayed and the overlay is added
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// create a function to be used to close the modal by adding the hidden class
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// close modal when clicking x
btnCloseModal.addEventListener('click', closeModal);

// close modal when clicking outside the window
overlay.addEventListener('click', closeModal);

// close modal when clicking esc key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // here we need to actually call the function with () where we didnt before because JS would execute it itself
  }
});
