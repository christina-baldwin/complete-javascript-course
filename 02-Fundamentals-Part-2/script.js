"use strict";

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534; */

/* function logger() {
  console.log("My name is Jonas");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`)); */

/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3)); */

/*// ARRAYS
const friend1 = "Michael";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

friends[2] = "Jay";

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); */

/* const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} */

//OBJECTS
// Object literal syntax
/* const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
// DOt vs bracket notation
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends."
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends."
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschemtdman";
console.log(jonas);

// Challenge
// Jonas has 3 friends and his best friend is called Michael

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
); */

// Object Methods
/* const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary()); */

// LOOPS

/*for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights rep ${rep}`);
}

const jonas = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("ONLY STRINGS");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("BREAK WITH NUMBER");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
} */

// loop backwards
/*const jonas = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

// loop in loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight rep ${rep}`);
  }
} */

// while loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights rep ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights rep ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}
