'use strict';

// 10 - A Closer Look at Functions

//  ---------- Index -----------
// Default Parameters
// How Passing Arguments Works Value vs. Reference
////////////////////////////////////////
////////////////////////////////////////

// How Passing Arguments Works Value vs. Reference

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
