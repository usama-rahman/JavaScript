'use strict';
let currentScore = 20;
const randomNumber = Math.floor(Math.random() * 20 + 1);
const check = document.querySelector('.check');
const number = document.querySelector('.number').textContent;
console.log(number);
number.textContent = randomNumber;
let score = document.querySelector('.score');
console.log(randomNumber);

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let a = parseInt((score.innerHTML = currentScore));
  --currentScore;

  // console.log(currentScore);

  if (randomNumber === guess) {
    // console.log('Win');
    document.body.style.backgroundColor = 'green';
  } else {
    // console.log('try again');
  }
});
