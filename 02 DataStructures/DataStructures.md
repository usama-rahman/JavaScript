# Data Structures, Modern Operators and Strings

---

- [The Spread Operator](#the-spread-operator) `...`

- Rest Pattern and Parameters

- [Short Circuiting](#short-circuiting-and-) `&& and ||`

- [The Nullish Coalescing Operator](#the-nullish-coalescing-operator) `??`

- [Coding Challenge](#coding-challenge-1) `#1`

- [Logical Assignment Operators](#logical-assignment-operators) `||=` and `??=`

- Looping Arrays The for-of Loop

- [Enhanced Object Literals](#enhanced-object-literals)

- Optional Chaining `.?`

- [Looping Objects Object](#looping-objects-object-keys-values-and-entries) `Keys`, `Values`, and `Entries`

- [Coding Challenge](#coding-challenge-2) `#2`

- [Sets](#sets) `Set`

- [Maps](#maps) `Map`

- [Maps Iteration](#maps-iteration) `Map`

- [Coding Challenge](#coding-challenge-3) `#3`

- [Working With](#working-with-strings) `Strings`

- [Coding Challenge](#coding-challenge-4) `#4`

---

## Working With Strings

### Part - 1

```js
const airline = 'Bangladesh Biman BB';
const plane = 'A726';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('n'));
console.log(airline.lastIndexOf('n'));
console.log(airline.indexOf('Biman'));
console.log(airline.indexOf('biman'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('usama'));
console.log(typeof new String('usama'));

console.log(typeof new String('usama').slice(-1));
```

### Part - 2

```js
const airline = 'Biman Bangladesh BB';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger = 'uSaMA';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@usama.com';
const loginEmail = '  Hello@usama.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
```

### Part - 3

```js
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Usama Rahman'.split(' '));

const [firstName, lastName] = 'Usama Rahman'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('Usama Rahman');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
```

### String Methods Practice

```js
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//  Delayed Departure from FAO to TXL (11h25)
//            Arrival from BRU to FAO (11h45)
//    Delayed Arrival from HEL to FAO (12h05)
//          Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
```

---

## Maps Iteration

```js
const question = new Map([
  ['question', 'What is the best Programing language'],
  [1, 'C'],
  [2, 'C++'],
  [3, 'Python'],
  [4, 'JavaScript'],
  ['correct', 4],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

// console.log(question);

// Quize App

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}

const answer = Number(prompt('Your Answer:'));
// console.log(answer);

console.log(question.get(question.get('correct') === answer));
```

---

## Maps

##### Mapping an array of numbers to an array of square roots

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```

##### Using map to reformat objects in an array

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
```

##### Mapping an array of numbers using a function containing an argument

```js
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); // [2, 8, 18]
console.log(numbers); // [1, 4, 9]
```

---

## Sets

```js
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pasta',
  'soup',
  'pizza',
  'pasta',
  'pizza',
]);

console.log(ordersSet);
console.log(new Set('usama'));

console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('soup');
// ordersSet.clear();
console.log(ordersSet);

// Set has no indexes
console.log(ordersSet[2]); // undefined

for (const order of ordersSet) {
  console.log(order);
}

// Set --> new Unique Array

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(new Set(staff).size);
```

---

## Optional Chaining`.?`

```js
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

let openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 1, // Open 23 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
};
```

```js
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional Chaining (?)

console.log(restaurant.openingHours.mon?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, open at ${open}`);
}
```

---

## Looping Objects Object `Keys`, `Values`, and `Entries`

```js
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

let openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 1, // Open 23 hours
    close: 24,
  },
};
```

### Keys `key`

```js
//  Property Name / Keys

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} Days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
```

### Values `Value`

```js
// Property values

const values = Object.values(openingHours);
console.log(values);
```

### Entries `Entries`

```js
// Entries Object

const entries = Object.entries(openingHours);

// [key, Value]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
```

---

## Enhanced Object Literals

```js
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

let openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 1, // Open 23 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours, // Old Methode
  //  ES6 Enhanced Object Literals
  openingHours, // ES6
};
```

---

## Logical Assignment Operators

```js
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
```

---

## The Spread Operator`...`

```javascript
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

console.log(myUpdatedVehicle);
```

---

## Short Circuiting`&& and ||`

```js
console.log('---- OR ----');

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
```

---

## The Nullish Coalescing Operator`??`

```js
// Nullish: null and undefined (NOT 0 or '')

let myPoint = null;

const point = myPoint ?? 10;
console.log(point);
```

---

## Coding Challenge #1

Building a football betting app !

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data.

```js
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
```

So here are your tasks:

1. Create one player array for each team (variables `players1` and `players2`)

2. The first player in any player array is the goalkeeper and the others are field players. For `Bayern Munich` (team 1) create one variable `gk` with the goalkeeper's name, and one array `fieldPlayers` with all the remaining (10 field players)

3. Create an array `allPlayers` containing all players of both teams (22 players)

4. During the game, `Bayern Munich` `team 1` used 3 substitute players. So create a new array `players1Final` containing all the original `team1` players plus `Thiago`, `Coutinho` and `Perisic`

5. Based on the game.odds object, create one variable for each odd (called `team1`, `draw` and `team2`)

6. Write a function `printGoals` that receives an arbitrary number of player names (NOT an array) and prints each of them to the `console`, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an `if`/`else` statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with `players` from `game.scored`

_Ans: Codebase_

---

## Coding Challenge #2

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a `loop` to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
   Odd of victory Bayern Munich: 1.33
   Odd of draw: 3.25
   Odd of victory Borrussia Dortmund: 6.5
   Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names

- BONUS: Create an object called `scorers` which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

```js
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
```

## Coding Challenge #3

```js
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
```

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the `keys` are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array `events` of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the `yellow card` from minute 64 was unfair.
   So remove this event from the game events log.

3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
   [FIRST HALF] 17: ⚽️ GOAL

---

## Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
