'use strict';

// 10 - A Closer Look at Functions

//  ---------- Index -----------

// Default Parameters
// How Passing Arguments Works Value vs. Reference
// First-Class and Higher-Order Functions
// Functions Accepting Callback Functions
// Functions Returning Functions
// The call and apply Methods
// The bind Method

////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////

// The bind Method

////////////////////////////////////////

// The call and apply Methods

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
// console.log(usBangla);

book.call(bimanBangladesh, 563, 'Boltu Sontu');
// console.log(bimanBangladesh);

const novoAir = {
  airline: 'Novo Air',
  iataCode: 'LA',
  bookings: [],
};

book.call(novoAir, 657, 'Chandu Funtu');

// Apply methode

const flightData = [583, 'George Cooper'];
book.apply(novoAir, flightData);
// console.log(novoAir);

book.call(novoAir, ...flightData);

////////////////////////////////////////

// The bind Method

const bookNA = book.bind(novoAir);
const bookUSB = book.bind(usBangla);
const bookBB = book.bind(bimanBangladesh);

bookNA(44, 'afnan khan');

const bookNA23 = book.bind(novoAir, 23);
bookNA23('adnan');
bookNA23('Martha');

////////////////////////////////////////

// Functions Returning Functions

/*
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
*/

////////////////////////////////////////

// Functions Accepting Callback Functions

/*
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
*/

////////////////////////////////////////

// How Passing Arguments Works Value vs. Reference
/*
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
*/

////////////////////////////////////////

// Default Parameters
/*
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
*/
