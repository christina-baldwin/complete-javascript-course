/* let country = "Sweden";
let continent = "Europe";
let language = "English";
let population = 10.5;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
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

// console.log("9" - "5"); // -> number
// console.log("19" - "13" + "17"); // -> number
// console.log("19" - "13" + 17); // -> number
// console.log("123" < 57); // -> boolean
// console.log(5 + 6 + "4" + 9 - 4 - 2); // -> number

// const neighbourCountries = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (neighbourCountries === 1) {
//   console.log("Only 1 border!");
// } else if (neighbourCountries > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No neighbours!");
// }

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
} */
