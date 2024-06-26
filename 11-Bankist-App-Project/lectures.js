'use strict';

/*/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////
// ARRAYS
/////////////////////////////////////////////////

// to connect in index:
<script src="lectures.js"></script>

// SIMPLE METHODS
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

// splice
console.log(arr.splice(2));
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());

// concat
const letters = arr.concat(arr2);
console.log(letters);

// join
console.log(letters.join('-')); 

// at
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
// getting the last element traditionally
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
// getting the last element with at
console.log(arr.at(-1)); 

// FOR EACH
// for of loop
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, transaction] of transactions.entries()) {
  if (transaction > 0) {
    console.log(`Transaction ${index + 1}: You deposited ${transaction}`);
  } else {
    console.log(`You withdrew ${Math.abs(transaction)}`);
  }
}

// for each loop
console.log('FOR EACH');
transactions.forEach(function (transaction, index, array) {
  if (transaction > 0) {
    console.log(`Transaction ${index + 1}: You deposited ${transaction}`);
  } else {
    console.log(
      `Transaction ${index + 1}: You withdrew ${Math.abs(transaction)}`
    );
  }
}); 

// with maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// with sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${key}: ${value}`);
}); 

// map method
const eurToUsd = 1.1;

const transactionsUsd = transactions.map(function (tra) {
  return tra * eurToUsd;
});

console.log(transactions);
console.log(transactionsUsd);

const transactionsDesc = transactions.map(function (tra, i) {
  if (tra > 0) {
    return `Transaction ${i + 1}: You deposited ${tra}`;
  } else {
    return `Transaction ${i + 1}: You withdrew ${Math.abs(tra)}`;
  }
});

console.log(transactionsDesc); 

// filter method
const deposits = transactions.filter(function (tra) {
  return tra > 0;
});
console.log(transactions);
console.log(deposits); 

const withdrawals = transactions.filter(function (tra) {
  return tra < 0;
});

console.log(withdrawals); 

// reduce method

console.log(transactions);

// accumulator = snowball effect
const balance = transactions.reduce(function (acc, cur, i, arr) {
  console.log(`Transaction ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);
// max value
const maxValue = transactions.reduce(function (acc, cur) {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
}, transactions[0]);
console.log(maxValue); 

// chaining methods

const eurToUsd = 1.1;
const totalDepositsUsd = transactions
  .filter(tra => tra > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, tra) => acc + tra, 0);
console.log(totalDepositsUsd); 

// find method
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = transactions.find(tra => tra < 0);
console.log(transactions);
console.log(firstWithdrawal); 

// creating and filling arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const rolls = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);
console.log(rolls);*/

/* ////////////////////////
// CHALLENGE #1

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (juliaData, kateData) {
  const juliaDataCorrect = juliaData.slice();
  juliaDataCorrect.splice(0, 1);
  juliaDataCorrect.splice(-2);
  // dogsJulia.slice(1, 3)

  const allData = [...juliaDataCorrect, ...kateData];

  allData.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(juliaData, kateData);

// CHALLENGE #2
const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(function (dogAge) {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  console.log(humanAges);
  const humanAges18 = humanAges.filter(function (humanAge) {
    return humanAge >= 18;
  });
  console.log(humanAges18);
  const humanAgesAvg =
    humanAges18.reduce(function (acc, humanAge18, i, arr) {
      return acc + humanAge18;
    }, 0) / humanAges18.length;
  return humanAgesAvg;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// CHALLENGE #3
const calcAverageHumanAge1 = dogAges =>
  dogAges
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, humanAge18, i, arr) => acc + humanAge18 / arr.length, 0);

const avg3 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
const avg4 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
console.log(avg3, avg4);

// CHALLENGE #4
// 1.
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
const calcRecommendedFood = function (dogs) {
  dogs.forEach(function (dog) {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
};
calcRecommendedFood(dogs);
console.log(dogs);
// 2.
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);

if (sarahsDog.curFood > (110 / 100) * sarahsDog.recommendedFood) {
  console.log(`Sarahs dog is eating too much`);
} else if (sarahsDog.curFood < (90 / 100) * sarahsDog.recommendedFood) {
  console.log(`Sarahs dog is eating too little`);
} else {
  console.log(`Sarahs dog is eating just right`);
}
// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);
// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > 0.9 * dog.recommendedFood &&
      dog.curFood < 1.1 * dog.recommendedFood
  )
);
// 7.
const dogsOkFood = dogs.filter(
  dog =>
    dog.curFood > 0.9 * dog.recommendedFood &&
    dog.curFood < 1.1 * dog.recommendedFood
);
console.log(dogsOkFood);
// 8.
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy); */

/*/////////////////////////////////////////////////
// NUMBERS DATES TIMES
/////////////////////////////////////////////////

// binary base 2
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// conversion
console.log(Number('23'));
console.log(+'23');

// parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// check if value is not a number (NaN)
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// check if value is a number (finite)
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// remainder
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 x 2 + 1

console.log(8 & 3);
console.log(8 / 3); // 8 = 2 x 3 + 2

console.log(6 % 2); // = 0
console.log(6 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(2));
console.log(isEven(9));

// numeric separators
// 287,460,000,000
const diameter = 287_460_000_000;

const priceCents = 345_99;

const transferFee = 15_00;

const PI = 3.1415;

console.log(Number('230_000'));

// date/time
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015')); // not recommended

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(0)); // ms after unix time
console.log(3 * 24 * 60 * 60 * 1000); // converting 3 days to ms

// working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getTime());
console.log(future.toISOString());
console.log(Date.now);

future.setFullYear(2040); */
