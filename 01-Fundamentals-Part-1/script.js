/* let js = "amazing";
console.log(40 + 8 + 23 - 10);
let firstName = "Jonas";
console.log(firstName); */

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

/* console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); */

/*let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990; */

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; */

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */

/*const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const currentYear = 2037;

const jonas =
  "I'm " +
  firstName +
  " , a " +
  (currentYear - birthYear) +
  " year old " +
  job +
  "!";
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${
  currentYear - birthYear
} year old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with \n\ multiple \n\ lines/`); */

/* const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); */

// type conversion
/*const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old"); //string
console.log("23" - "10" - 3); //number
console.log("23" / "2"); //number
console.log("23" + "10" + 3); //string */

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  ("You should get a job!");
}

let height;
if (height) {
  console.log("Yay height is defined!");
} else {
  conso9le.log("Height is undefined");
} */

//Equality operators
/*const age = "18";
if (age === 18) console.log("You just became an adult! (strict)");
if (age == 18) console.log("You just became an adult (loose)!");
const favourite = Number(prompt("What is yout favourite number?"));
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also an amazing number");
} else if (favourite === 9) {
  console.log("9 is also an amazing number");
} else {
  console.log("Number not 23 nor 7 nor 9");
}

if (favourite !== 23) console.log("Why not 23?"); */

// Logical operators

/* const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = false; //C
console.log(hasDriversLicense & hasGoodVision & isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive.");
} */

// Switch statement
/*const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
} */

// The conditional operator
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine!")
//   : console.log("I like to drink water!");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
