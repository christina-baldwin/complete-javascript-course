'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// this makes sure that the number that is inputed in the number box by the user gets saved when they click "check"
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // if there is no guess inputted before clicking check
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
