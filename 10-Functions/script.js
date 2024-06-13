'use strict';

/*// default values
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000); */

/*// arguments
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schemdtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, jonas);
// // the flight doesnt change because flight is a primitive value so flightNum is a copy and as such a completely differenct variable so the change isnt reflected in the flight variable
// console.log(flight);
// // this works and the Mr is added because it is referenced in the memory heap and they point to the same object in memory
// console.log(jonas);

// this is the same as....
// const flightNum = flight;
// const passenger = jonas

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
checkIn(flight, jonas); */

/*// first-class / higher-order functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// this is a higher-order function as it takes in another function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks often
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); */

/*// functions calling functions: works through closure mechanism
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Stephen');

greet('Hello')('Jonas');
// challenge: make it an arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}!`);
greetArr('Hi')('Jonas'); */

/*// call and apply
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Mike Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// does not work
// book(23, 'Sarah Williams');
// the call method: indicidual arguments
book.call(eurowings, 23, 'Sarah WIlliams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// apply method: array of arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
//same as:
book.call(swiss, ...flightData);

// bind method
const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookLx = book.bind(swiss);

bookEw(23, 'Stephen Williams');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('Jonas Schmedtmann');
bookEw23('Martha Cooper');

// with event listeners: "this" points to the button
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// with partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// with functions within functions
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));*/

/*////////////////////////////////////////////
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
// iife
(function () {
  console.log('This will never run again');
  const isprivate = 23;
})();

(() => console.log('This will also never run again'))();

{
  const isprivate = 23;
  var notPrivate = 46;
}
console.log(isprivate);
console.log(notPrivate);*/

///////////////////////
// CLOSURES
// situation 1
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);

// situation 2
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// re-assigning f function
h();
f();

// situation 3
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

/*/////////////////////////
// CHALLENGE #1
// 1.
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const userInput = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );

    if (userInput === null) {
      console.log('User cancelled the prompt.');
      return;
    }

    const answer = Number(userInput);

    if (answer === 0) {
      this.answers[0] += 1;
    } else if (answer === 1) {
      this.answers[1] += 1;
    } else if (answer === 2) {
      this.answers[2] += 1;
    } else if (answer === 3) {
      this.answers[3] += 1;
    } else {
      console.log('This is not a valid input');
    }

    this.displayResults();
    this.displayResults('string');
  },

  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};

poll.registerNewAnswer();
console.log(poll.answers);
// 2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
// 3. see above
// 4. see above
// bonus
// Test data for bonus:
// Data 1: [5, 2, 3]
// Data 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); */

///////////////
// CHALLENGE #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
