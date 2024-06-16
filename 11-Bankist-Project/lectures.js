'use strict';

/*/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
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

///////////////////////
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

checkDogs(juliaData, kateData); */

// map method
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
