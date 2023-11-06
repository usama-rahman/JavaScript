'use strict';

const randomNumber = Math.floor(Math.random() * 20 + 1);
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
console.log(randomNumber);
console.log(guess.value);
check.addEventListener('click', function () {
  if (guess === randomNumber) {
    console.log('win');
  } else {
    console.log('over');
  }
});
// Working
