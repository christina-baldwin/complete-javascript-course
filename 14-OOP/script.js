'use strict';

// creating a constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create a method inside a constructor
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const jonas = new Person('Jonas', 1991);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
console.log(jonas instanceof Person);

// prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

// this is the prototype of the jonas variable
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // this is not the prototype of person it is the prototype that will be used when the method is called

console.log(Person.prototype.isPrototypeOf(jonas));

// more honest name = .prototypeOfLinkedObjects

// adding properties
Person.prototype.species = 'Homo sapien';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// built-in objects
console.log(jonas.__proto__.__proto__); // prototype property of object (top of chain)
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 7, 8, 3, 4, 6];
console.log(arr.__proto__); // each array will inherit these functions
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // has access to methods

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
