'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new variable with same name as outer scope's variab;e
      const firstName = 'Steven';

      // reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // cant read it
    console.log(millenial); // can becuase var is old JS and so is function-scoped and ignores blocks
    // add(2, 3); // doesnt work
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age); //cant access becuase the scope chain can't reach inside the funtion
