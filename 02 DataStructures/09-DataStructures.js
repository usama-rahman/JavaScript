'use strict';

// 09 - Data Structures, Modern Operators and Strings

//  ---------- Index -----------

// The Spread Operator (...)
// Rest Pattern and Parameters
// Short Circuiting (&& and ||)
// The Nullish Coalescing Operator (??)
// Logical Assignment Operators
// Coding Challenge #1
// Looping Arrays The for-of Loop
// Enhanced Object Literals
// Optional Chaining (.?)
// Looping Objects Object Keys, Values, and Entries
// Coding Challenge #2
// Sets
// Maps Fundamentals
// Maps Iteration

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
  // openingHours: openingHours,
  //  ES6 Enhanced Object Literals
  openingHours,
};

////////////////////////////////////////

// Coding Challenge #2

/* 

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

////////////////////////////////////////

// Looping Objects Object Keys, Values, and Entries

/*

//  Property Name/ Keys

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} Days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values

const values = Object.values(openingHours);
console.log(values);

// Entries Object

const entries = Object.entries(openingHours);

// [key, Value]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

////////////////////////////////////////

// Optional Chaining (?.)

/*
if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// With Optional Chaining (?)

  console.log(restaurant.openingHours.mon?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, open at ${open}`);
}
*/
////////////////////////////////////////

// The for-of Loop

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

///////////////////////////////////////

// Coding Challenge #1

// Prompt -
/* 
Building a football betting app !

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining (10 field players)

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

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

// 1.
const [players1, players2] = game.players;
// console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

///////////////////////////////////////

// Logical Assignment Operators

/*
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
*/

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
