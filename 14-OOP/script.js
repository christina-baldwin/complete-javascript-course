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

// ES6 class expression
// const personCl = class {};

// ES6 class declaration
class PersonCl {
  constructor(_fullName, birthYear) {
    this.fullName = _fullName;
    this.birthYear = birthYear;
  }
  // method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this._fullName}!`);
};
jessica.greet();

const walter = new PersonCl('Walter', 1965);

// setters and getters
const account = {
  owner: 'jonas',
  transactions: [200, 500, 310, 401],

  get latest() {
    return this.transactions.slice(-1).pop();
  },

  set latest(mov) {},
};

console.log(account.latest);

// static methods
// array.from method
Person.hey = function () {
  console.log('Hey there 👋');
};
PersonCl.hey();

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// pass in the prototype we want our new object to be linked to
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// this function has some of the same properties as the Person just wiht the extra proprety of course
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// this returns an empty object
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi my name is ${this.firstName} and I study ${this.course}`);
};

// mike inherits calcAge because of inheritance
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

////////////////////////////////
// CODING CHALLENGES

// challenge #1
// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// 2.
Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};
// 3
Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};
// 4.
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1, car2);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();

car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
car2.brake();

// challenge #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log((this.speed += 10));
  }

  brake() {
    console.log((this.speed -= 5));
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car3 = new CarCl('Ford', 120);
console.log(car3.speedUS);
car3.accelerate();
car3.accelerate();
car3.accelerate();
car3.speedUS = 50;
console.log(car3);
