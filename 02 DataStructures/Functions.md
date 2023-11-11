# A Closer Look at Functions

---

- [Default Parameters](#default-parameters)

- [How Passing Arguments Works]()Value vs. Reference

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
