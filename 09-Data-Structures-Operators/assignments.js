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
