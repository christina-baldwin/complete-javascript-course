'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

/*/////////////////////////
// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// method 1
// const temp = main;
// secondary = temp;
// method 2
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// to receive first value and the nested array
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // without default values, r is equal to undefined */

/*// DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// changing names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); 

// practical application (see function above, used destructuring in the original function using curly brackets and used defaults)
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via Del Sole, 21',
  starterIndex: 1,
});*/

/*//////////////////////
// THE SPEAD OPERATOR
const arr = [7, 8, 9];
// if you want to add this array to a new array the bad way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// better way with spread
const newArr = [1, 2, ...arr];
console.log(newArr);
// example: create a new menu
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);
// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays (main menu and starter menu)
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// spread with strings
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
//console.log(`${...str} Schmedtman`); this does not work as a template literal does not expect values separated by a comma
// example: using the new function orderPasta which takes the ingredients by spreading the ingredients asked for in a prompt
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
restaurant.orderPasta(...ingredients);
// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy); */
