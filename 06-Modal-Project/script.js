'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

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
