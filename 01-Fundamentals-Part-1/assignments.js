let country = "Sweden";
let continent = "Europe";
let language = "Swedish";
let population = 10.5;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = true;
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

population = 11.5;
let halfPopulation = population / 2;
console.log(halfPopulation);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

let avgPopulation = 33;
console.log(population < avgPopulation);

let description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;

description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

population = 10.5;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

console.log("9" - "5"); // -> number
console.log("19" - "13" + "17"); // -> number
console.log("19" - "13" + 17); // -> number
console.log("123" < 57); // -> boolean
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> number
