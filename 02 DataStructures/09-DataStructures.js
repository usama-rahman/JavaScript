'use strict';

// 09 - Data Structures, Modern Operators and Strings

//  ---------- Index -----------

// The Spread Operator (...)
// Rest Pattern and Parameters
// Short Circuiting (&& and ||)
// The Nullish Coalescing Operator (??)
// Logical Assignment Operators

///////////////////////////////////////

// Logical Assignment Operators

const rest1 = {
  name: 'NYC',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'LA',
  owner: 'Rossi',
};

// OR (||) assingment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nulliah assingment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

///////////////////////////////////////

// The Nullish Coalescing Operator (??)

// Nullish: null and undefined (NOT 0 or '')

/*
let myPoint = null;

const point = myPoint ?? 10;
console.log(point);
*/

///////////////////////////////////////

// Short Circuiting (&& and ||)

/*
console.log('---- OR ----');

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
*/

///////////////////////////////////////

// The Spread Operator (...)

/*
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// spread operator is often used in combination with destructuring.

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(numbers);

// We can use the spread operator with objects too

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red',
};

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow',
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle)

*/
