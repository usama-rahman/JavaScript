# A Closer Look at Functions

---

- [Default Parameters](#default-parameters)

- [How Passing Arguments Works Value vs. Reference](#how-passing-arguments-works-value-vs-reference)

- [Functions Accepting Callback Functions](#callback-functions)

- [Functions Returning Functions](#functions-returning-functions)

- [The `call` and `apply` Methods](#call-and-apply)

- [The `bind` Method](#bind-method)

- [Coding Challenge](#coding-challenge-1)`#1`

---

---

## `call` and `apply`

```js
const bimanBangladesh = {
  airline: 'Biman Bangladesh',
  iataCode: 'BH',
  bookings: [],
  // book: function() {}
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passengerName,
    });
  },
};

bimanBangladesh.book(323, 'Usama Rahman');
bimanBangladesh.book(946, 'AR Khan');

const usBangla = {
  airline: 'US Bangla',
  iataCode: 'NS',
  bookings: [],
};

const book = bimanBangladesh.book;

//  Call Methode

book.call(usBangla, 325, 'Ratul Royyy');
console.log(usBangla);

book.call(bimanBangladesh, 563, 'Boltu Sontu');
console.log(bimanBangladesh);

const novoAir = {
  airline: 'Novo Air',
  iataCode: 'LA',
  bookings: [],
};

book.call(novoAir, 657, 'Chandu Funtu');

// Apply methode

const flightData = [583, 'George Cooper'];
book.apply(novoAir, flightData);
console.log(novoAir);

book.call(novoAir, ...flightData);
```

---

## `bind` Method

```js
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
```

---

## Functions Returning Functions

```js
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Usama');
greeterHey('Rahman');

greet('Hello')('Usama');

// With Array Function

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Hi')('Usama');
```

---

## Callback Functions

```js
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');

  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Usama', 'Rahman', 'khan'].forEach(high5);
```

---

## How Passing Arguments Works Value vs. Reference

```js
const flight = 'BH423';
const usama = {
  name: 'Usama Rahman',
  passport: 445426089674,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LE433';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 445426089674) {
    console.log('Please Check In 👍');
  } else {
    console.log(' ⚠️ Worng Passport !! ');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...

// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(usama);
checkIn(flight, usama);
```

## Default Parameters

```js
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 2,
  price = 199 * numPassengers
) {
  //   ES5
  //   numPassengers = numPassengers || 50;
  //   price = price || 549;
  const booking = { flightNum, numPassengers, price };

  console.log(booking);
  bookings.push(booking);
};

createBooking('A759');
createBooking('A759', 5, 600);
createBooking('A759', 10);
createBooking('A759', undefined, 7);
```

---

## Coding Challenge #1

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:

   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
   What is your favourite programming language?
   0: JavaScript
   1: Python
   2: Rust
   3: C++
   (Write option number)

   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

- HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

---
