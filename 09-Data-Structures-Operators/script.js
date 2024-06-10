'use strict';

// Data needed for first part of the section
const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*/////////////////////////
// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// method 1
// const temp = main;
// secondary = temp;
// method 2
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// to receive first value and the nested array
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // without default values, r is equal to undefined */

////////////////////////////
/*// DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// changing names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); 

// practical application (see function above, used destructuring in the original function using curly brackets and used defaults)
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via Del Sole, 21',
  starterIndex: 1,
});*/

/*//////////////////////
// THE SPEAD OPERATOR
const arr = [7, 8, 9];
// if you want to add this array to a new array the bad way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// better way with spread
const newArr = [1, 2, ...arr];
console.log(newArr);
// example: create a new menu
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);
// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays (main menu and starter menu)
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// spread with strings
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
//console.log(`${...str} Schmedtman`); this does not work as a template literal does not expect values separated by a comma
// example: using the new function orderPasta which takes the ingredients by spreading the ingredients asked for in a prompt
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
restaurant.orderPasta(...ingredients);
// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy); */

/*////////////////////
// REST PATTERN
// 1. destructuring
// spread because left side of =
const arr = [1, 2, ...[3, 4]];
// rest becuase right side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
//this separtes the first two into "a" and "b" and the rest into "others"

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza.risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2. functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //unpack the values then will be repacked in the function in the numbers array
// example: using orderPizz method
// makes 2 arrays: 1 for the main ingredient and another with the other ingredients
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); */

/*///////////////////////////////
// SHORT CIRCUITING (&& AND ||)
// using the or operator
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// example: check if numGuests exists
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// doing the same thing as above but using short-circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// this is a problem when the value is zero, will return the default as 0 is a falsy value but we dont want this as 0 is a real amount

// using the and operator
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');
// example: check if orderPizza exisits
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// doing as above but with short-circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); */

/*////////////////////////////////////
// NULLISH COALESCING OPERATOR (??)
// fixing the issue with using 0 as a value and it coming up as falsy
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); */

/*////////////////////////////////
// LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// if numGuests exists return numGuests if not default numGuests to 10
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;
// this way it returns 0 and "" as falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// nullish assignment operator (only null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// replace owner name with anonymous
rest1.owner = rest1.owner && 'Anonymous';
rest2.owner = rest2.owner && 'Anonymous';
// using logical and assignment
rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';

console.log(rest1);
console.log(rest2); */

/* /////////////////
//  LOOPING ARRAYS: THE FOR-OF LOOP
// will loop over the entire iteration and identify seperate values
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`); */

/////////////////////////////
// ENHANCED OBJECT LITERALS
// objects: see opening hours at the top of the code
// functions: see order at the top of the code
// computing properties: see const weekdays at the top

/*/////////////////////////
// OPTIONAL CHAINING
// the below is an error so first would need to check if mon exists and then check what time it opens
// console.log(restaurant.openingHours.mon.open);
//  could fix this with an if function but looks messy and only checks for one property
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// using optional chaning instead
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// example
const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //variable name needs brackets notation
  console.log(`On ${day} we open at ${open}`);
}
// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
// arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty'); */

/*//////////////////////////////
// LOOPING OBJECTS
// property name
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);
// property values
const values = Object.values(openingHours);
console.log(values);
// whole object
const entries = Object.entries(openingHours);
// [key, value] but caa use any name this is just the order of it
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`); 
} */

/*////////////////////////////
// SETS

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic bread');
orderSet.delete('Pizza');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// example: remove duplicate values from arrays
const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// if you only want to know the number of unique elements:
console.log(new Set(['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter']).size);
// counting how many letters in a string:
console.log(new Set('jonasschmedtman').size); */

/*////////////////
// MAPS
const rest = new Map();
rest.set('name', 'Classic Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));
rest.delete(2);

// need to be in a constant to be able to be saved in the same place in the memory so as to be able to see it when called later
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

console.log(rest.size);
console.log(rest); */

/*//////////////////
// MAP ITERATION
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! :D'],
  [false, 'Try again! :('],
]);
console.log(question);
// convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// using iterable maps in for- loops: quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

// from inside out => will give true or false => then will look for true or false in the map then returns that to the console
console.log(question.get(question.get('correct') === answer));
// my way with an if statement (gives the same result):
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// object to a map
const firstBookMap = new Map(Object.entries(books[0]));

// map to an array
console.log([...question]);
console.log([...question.keys()]); */

/*////////////////////////
// WORKING WITH STRINGS
// PART 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
// position
console.log(plane[0]);
console.log('B737'[0]);
// length
console.log(airline.length);
// index of
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
// slice
console.log(airline.slice(4));
// extracting the first and last word without knowing indexes
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// extracting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
// example: whether a seat is a middle seat or not
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat :/');
  } else {
    console.log('You got lucky ;)');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
// what JS does: when calling a method on a string, it is converted to an object
console.log(new String('jonas'));
// PART 2
// changing cases
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// comparing
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = email.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalEmail = loginEmail.toLowerCase().trim();
console.log(email === normalEmail);
// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));
// regular expression
console.log(announcement.replaceAll(/door/g, 'gate'));
// booleans: includes, startsWith, endsWith
const planeModel = 'Airbus A320neo';
console.log(planeModel.includes('A320'));
console.log(planeModel.startsWith('Airb'));

if (planeModel.startsWith('Airbus') && planeModel.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}
// exercise: check baggage
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed onboard');
  } else {
    console.log('Welcome onboard');
  }
};
checkBaggage('I have a laptop, some food, and a pocket knife');
checkBaggage('Socks and a camera');
checkBaggage('GOT SOME SNACKS AND A GUN FOR PROTECTION'); */
// PART 3
// divider strings
console.log(`a+very+nice+string`.split(`+`));
console.log(`Jonas Schmedtmann`.split(` `));

const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

const capitaliseName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};
capitaliseName('jessica ann smith davis');
capitaliseName('jonas schemdtmann');
// padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(30, '+'));
// example: covering credit card numbers so only the last 4 digits show
const maskCrediCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCrediCard(43378463884647384));
console.log(maskCrediCard('4337654842190567324'));
// repeat
const message2 = 'Bad weather...ALL departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈️`.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////
// **** CODING CHALLENGES ****
///////////////////////////////

////////////////////
// CODING CHALLENGE #1: FOOTBALL BETTING APP
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
/*
// 1.
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);
// 5.
const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...playerNames) {
  console.log(`Goals scored by: ${playerNames}`);
  console.log(`${playerNames.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
//  7.
console.log(
  (game.odds.team1 < game.odds.team2 &&
    `Team 1 is more likely to win than team 2`) ||
    (game.odds.team2 < game.odds.team1 &&
      `Team 2 is more likely to win than team 1`)
); */

/*/////////////////////////////////////////////////
// CODING CHALLENGE #2: FOOTBALL BETTING APP CONT.
// 1.
for (const [goal, playerName] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${playerName}`);
}
// 2.
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum = sum + odd;
}
const averageOdd = sum / Object.values(game.odds).length;
console.log(averageOdd);
// 3.
// console.log(
//   `- Odd of victory ${game.team1}: ${game.odds.team1}\n- Odd of draw: ${game.odds.x}\n- Odd of victory ${game.team2}: ${game.odds.team2} `
// );
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// 4. (bonus)
let scorers = {};

// const lewandowski = game.scored[0];
// scorers[lewandowski] = 1;

// const gnarby = game.scored[1];
// scorers[gnarby] = 1;

// const hummels = game.scored[2];
// scorers[hummels] = 1;

// const lewandowski = game.scored[3];
// scorers[lewandowski] = 2;

for (const [_, playerName] of game.scored.entries()) {
  if (scorers[playerName]) {
    scorers[playerName]++;
  } else {
    scorers[playerName] = 1;
  }
}
console.log(scorers);

// Jonas' solution:
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// } */

//////////////////////////////////////////////////
// CODING CHALLENGE #3: FOOTBALL BETTING APP CONT.
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);
// 3.
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
} */

/*//////////////////////////////////////////////////
// CODING CHALLENGE #4: CAMEL CASE CONVERSION.
// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  console.log(lines);

  for (const [i, line] of lines.entries()) {
    const [first, second] = line.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
}); */

//////////////////////////////////////////
// EXTRA CODING CHALLENGE: STRING PRACTICE
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [flightInfo, fromAirport, toAirport, time] = flight.split(';');
  const output = `${
    flightInfo.startsWith('_Delayed') ? '🔴' : ''
  }${flightInfo.replaceAll('_', ' ')} ${getCode(fromAirport)} to ${getCode(
    toAirport
  )} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}
