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
}
