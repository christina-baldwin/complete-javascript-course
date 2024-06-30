'use strict';

///////////////////////////////////////
// NOTE: PARTS OF THIS DON'T WORK BECASUE THE GEOLOCATION API DOESNT WORK NOW THE WAY IT DID WHEN THE COURSE WAS MADE

///////////////////////////////////////
// building a UI component with country information
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[Object.keys(data.languages)[0]]
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[Object.keys(data.currencies)[0]].name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const request = fetch('https://restcountries.com/v3.1/name/uk');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

/*///////////////////////////////////////
// fetch api - new way

// expanded code before creating the getJSON function
// const getCountryDataNOT = function (country) {
//   // fetches something
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     // we then get a response which we return
//     .then(function (response) {
//       // manually throwing the error
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     // since the previous was a promise, we can then chain the "then" method onto it
//     .then(function (data) {
//       // country 1
//       renderCountry(data[0]);
//       console.log(data);
//       // country 2
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);

//       return renderCountry(data[0], 'neighbour');
//     })
//     // to catch errors
//     .catch(err => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };



const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(function (data) {
      console.log('Country data:', data);
      renderCountry(data[0]);
      // had to add a check here because it wasnt working, wasnt in the lecture though
      const neighbour = data[0].borders ? data[0].borders[0] : null;
      console.log('Neighbour:', neighbour);

      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(function (data) {
      console.log('Neighbour data:', data);
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('uk');
});

///////////////////////////////////////
// building a promise
const lotteryPromise = new Promise(function (resolve, reject) {
  // first micotask so shows in the console first
  console.log('Lottery draw has started!');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!');
    } else {
      reject('You lost :(');
    }
  }, 2000);
});

// consume the promise we built
lotteryPromise
  // this is the resolve
  .then(result => console.log(result))
  // this is the reject
  .catch(err => console.error(err));
// promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve, _) {
    // nothing needed in the resolve function as all we want to do is to make it wait
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(2);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(3);
  })
  .then(() => {
    console.log('4 seconds passed');
    return wait(4);
  });

// instead of this (callback hell):
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// this shows up after the timer in the console
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(y => console.error(y));

///////////////////////////////////////
// promisifying the geolocation api

// changing it from callback-based to promise-based
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   // this is the value we want then it is filfilled
    //   position => resolve(position),
    //   err => reject(err)
    // );
    // can also write it like this as resolve deosnt necessarily need to be specified
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(function (response) {
      if (!response.ok)
        throw new Error(`Issues with geocoding (${response.status})`);
      return response.json();
    })
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    })
    .catch(function (err) {
      console.error(`${err.message} 💥💥💥`);
    });
};

btn.addEventListener('click', whereAmI); 

///////////////////////////////////////
// consuming promises
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    // geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('problem getting location data');

    const dataGeo = await resGeo.json();

    // country data
    // instead of doing this:
    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(response =>
    //   console.log(response)
    // );

    // will stop here until the data has been fetched then asign it to a variable
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error('problem getting country');
    const data = await response.json();

    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(error);
    renderError(`something went wrong: ${error.message}`);
  }

  // reject promise returned from async function
  throw error;
};

console.log('1: will get location');
// this allows it to show up in the written order
// const city = whereAmI();
// console.log(city);

whereAmI()
  .then(city => console.log(`2:${city}`))
  .catch(error => console.log(`2: ${error.message}`))
  // to make sure this turns up at the end of the console
  .finally(() => console.log('3: finished getting location'));

// using an IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.log(`2: ${error.message}`);
  }
  console.log('3: finished getting location');
})(); 

///////////////////////////////////////
// running promises in parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania'); */

///////////////////////////////////////
// other promise combinators

//Promise.race
// the one that takes the least time gets displayed
(async function () {
  const response = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(response[0]);
})();
// rejecting a promise if it takes too long
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};
// if timeout happens first, all of this will be rejected
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(5),
])
  .then(response => console.log(response[0]))
  .catch(err => console.log(err));

// Promise.allSettled
// gives an array of all settled promises
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another uccess'),
]).then(response => console.log(response));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another uccess'),
]).then(response => console.log(response));

///////////////////////////////////////
// try...catch
// small example:
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
/*///////////////////////////////////////
// our first AJAX call - old way

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[Object.keys(data.languages)[0]]
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[Object.keys(data.currencies)[0]].name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbourData = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // render country 1
    renderCountry(data);

    // get neighbour country
    const neighbour = data.borders[0];
    console.log(neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbourData('uk'); */

/*///////////////////////////////////////
// CHALLENGES

// CHALLENGE #1
const showError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=`)
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Issues with geocoding (${response.status})`);
      return response.json();
    })
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    })
    .catch(function (err) {
      console.error(`${err.message} 💥💥💥`);
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474); 

// CHALLENGE #2

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('image failed to load'));
    });
  });
};
const wait = function (seconds) {
  return new Promise(function (resolve, _) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(function (img) {
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 3 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(function (err) {
    console.error(err);
  }); */
