/*
/////////////////////////////
// DESTRUCTURING ARRAYS
// 1.1
const books = ['salemsLot', 'dracula', 'dune'];
const [firstBook, secondBook] = books;

// 1.2
const [, , thirdBook] = books;
console.log(thirdBook);

// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
[[, rating], [, ratingsCount]] = ratings;
console.log(ratings, ratingsCount);

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

////////////////////////////////
// DESTRUCTURING OBJECTS
// 2.1
const { title, author, ISBN } = books[0];
// 2.2
const { keywords: tags } = books[0];
// 2.3
const { language, programmingLanguage = 'unknown' } = books[6];
// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
// 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
// 2.6
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}; */

/////////////////////////
/*// THE SPREAD OPERATOR
// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];
// 3.2
function spellWord(word) {
  console.log(...word);
}; */

/*////////////////////////
// REST PATTERN AND PARAMETERS
// 4.1
const [mainKeyword, ...rest] = books[0].keywords;
// 4.2
const { publisher: bookPublisher, restOfTheBook } = books[1]; 
// 4.3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne'); */

/*//////////////////////
// SHORT CIRCUITING
// 5.1
function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}
// 5.2
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent && console.log(`"${title}" provides online content`);
}; */

/*////////////////////////////////
// NULLISH COALESCING OPERATOR
// 6.1
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`"${title}" provides no data about its online content`);
}; */

/*////////////////////////////////
// LOGICAL ASSIGNMENT OPERATORS
// 7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}
// 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}
// this also gets the same result
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= books[i].thirdParty.goodreads.rating >= 4.2;
} */

/*///////////////////
// LOOPING ARRAYS
// 8.1
let pageSum = 0;
for (let book of books) {
  pageSum += book.pages; // pageSum + book.pages = pageSum
}; */

/*////////////////////
// LOOPING OBJECTS
// 11.1
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
// 11.2
for (const [i, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[i].push(value);
}
// 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads); */

/*//////////////
// SETS
// 12.1
const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}
// 12.2
const uniqueKeywords = new Set(allKeywords);
// 12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
// 12.4
uniqueKeywords.delete('business');
// 12.5
uniqueKeywordsArr = [...uniqueKeywords];
// 12.6
uniqueKeywords.clear(); */

/*//////////
// MAPS
// 13.1
const bookMap = new Map();
bookMap.set('title', 'Clean Code');
bookMap.set('author', 'Rober C. Martin');
// 13.2
bookMap.set('pages', 464);
// 13.3
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// 13.4
console.log(bookMap.size);
// 13.5
if (bookMap.has('author')) console.log('The author of the book is known'); */

/*////////////
// MAPS ITERATION
// 14.1
const firstBookMap = new Map(Object.entries(books[0]));
// 14.2
for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
} */
