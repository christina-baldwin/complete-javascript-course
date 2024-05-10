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
console.log(description);
