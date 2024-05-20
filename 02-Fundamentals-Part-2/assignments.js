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

/* function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return countryDescription;
}

const finlandDescription = describeCountry("Finland", 6, "Helsinki");
const swedenDescription = describeCountry("Sweden", 10.5, "Stockholm");
const norwayDescription = describeCountry("Norway", 5.5, "Oslo");

console.log(finlandDescription);
console.log(swedenDescription);
console.log(norwayDescription);

function percentageOfWorld1(population) {
  const percentagePopulation = (population / 7900) * 100;
  return percentagePopulation;
}

const finlandPercentage1 = percentageOfWorld1(6);
console.log(finlandPercentage1);
const swedenPercentage1 = percentageOfWorld1(10.5);
console.log(swedenPercentage1);
const norwayPercentage1 = percentageOfWorld1(5.5);
console.log(norwayPercentage1);

const percentageOfWorld2 = function (population) {
  const percentagePopulation = (population / 7900) * 100;
  return percentagePopulation;
};

const finlandPercentage2 = percentageOfWorld2(6);
console.log(finlandPercentage2);
const swedenPercentage2 = percentageOfWorld2(10.5);
console.log(swedenPercentage2);
const norwayPercentage2 = percentageOfWorld2(5.5);
console.log(norwayPercentage2); */

/*const percentageOfWorld3 = (population) => (population / 7900) * 100;
const finlandPercentage3 = percentageOfWorld3(6);
console.log(finlandPercentage3);

function describePopulation(country, population) {
  const countryPercentage = percentageOfWorld3(population);
  console.log(
    `${country} has ${population} million people, whcih is about ${countryPercentage}% of the world`
  );
}

const describeFinland = describePopulation("Finland", 6);
console.log(describeFinland); */

/* const populations = [6, 10.5, 5.5, 0.3];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  const percentagePopulation = (population / 7900) * 100;
  return percentagePopulation;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

const neighbours = ["Finland", "Norway", "Iceland"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

console.log(neighbours.indexOf("Finland"));
neighbours[0] = "Republic of Finland";
console.log(neighbours); */
