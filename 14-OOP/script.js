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

// inheritance between ES6 classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first, creates the "this" keyword
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hi my name is ${this.fullName} and I study ${this.course}`);
  }
  // overwrites the method with the same name from the parent class
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// inheritance with Objoect.create
const PersonProto2 = {
  calcAge() {
    console.log(2037 - birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  introduce() {
    console.log(`Hi my name is ${this.firstName} and I study ${this.course}`);
  },
};

const steven2 = Object.create(PersonProto2);

const StudentProto2 = Object.create(PersonProto2);
StudentProto2.init = function (firstName, birthYear, course) {
  PersonProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto2);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();

// class example
// private class fields and methods (very new)
// 1. public fields
// 2. private fields
// 3. public methods
// 4. public methods
// there is also a static public method where they only work on the class itself
class Account {
  // 1. public fields (instances, need a ;)
  locale = navigator.language;

  // 2. private fields
  #transactions = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // can do this if we want something that doesnt need to be determined when making a new object
    // this._transactions = [];
    this.locale = navigator.language;
    this.#pin = pin;

    console.log(`Thanks for opening an account ${this.owner}`);
  }
  // 3. public methods
  // public interface: can read but cannot set them
  getTransactions() {
    return this.#transactions;
  }
  // create methods to interact with properties instead of doing it just outside
  deposit(val) {
    this.#transactions.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // this should only be able to access approveLoan, not be accessibel outise of this, this a data privacy concern
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  static helper() {
    console.log('Helper');
  }
  // 4. private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);

console.log(acc1);
console.log(acc1.getTransactions());

// console.log(acc1.#transactions);

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
    return this;
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

// challenge #3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  console.log(`Speed: ${(this.speed += 20)}\nCharge: ${this.charge--}`);
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

// challenge #4
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    console.log(`Speed: ${(this.speed += 20)}\nCharge: ${this.#charge}%`);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().brake().chargeBattery(80).accelerate();
