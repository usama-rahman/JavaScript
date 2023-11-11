# A Closer Look at Functions

---

- [Default Parameters](#default-parameters)

- [How Passing Arguments Works Value vs. Reference](#how-passing-arguments-works-value-vs-reference)

- [Functions Accepting Callback Functions](#callback-functions)

- [Functions Returning Functions](#functions-returning-functions)

- [The `call` and `apply` Methods](#call-and-apply)

- [The `bind` Method]()

- [Coding Challenge]()`#1`

---

## `bind` Method

---

## `call` and `apply`

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

---
