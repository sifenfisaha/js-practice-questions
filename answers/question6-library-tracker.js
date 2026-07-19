// Question 6 — Library Book Tracker

// An ARRAY of OBJECTS: each book has a title, a page count, and
// `available` (a BOOLEAN: true = on the shelf, false = borrowed).
const books = [
  { title: "atomic habits", pages: 320, available: true },
  { title: "clean code", pages: 464, available: false },
  { title: "the alchemist", pages: 208, available: true },
  { title: "deep work", pages: 304, available: false },
];

// Regular function: turn the boolean into a readable label.
function availability(available) {
  if (available) {
    return "On shelf";
  } else {
    return "Borrowed";
  }
}

// Arrow function + OBJECT DESTRUCTURING ({ title, pages, available }).
const formatBook = ({ title, pages, available }) =>
  `${title.toUpperCase()} (${pages} pages) — ${availability(available)}`;

// .map() formats every book; for...of prints each line.
const lines = books.map(formatBook);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps only books where available is true.
const availableBooks = books.filter((book) => book.available);
console.log(`Available books: ${availableBooks.length}`);

// .reduce() adds up all the page counts.
let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(`Total pages in library: ${totalPages}`);

// .some() returns true if AT LEAST ONE line passes the test.
// .includes() is a STRING METHOD that checks for text inside a string.
const hasCleanCode = lines.some((line) => line.includes("CLEAN CODE"));
console.log(`Clean Code is in the catalog: ${hasCleanCode}`);

// SPREAD (...) makes a new array with "1984" added.
const catalog = [...books, { title: "1984", pages: 328, available: true }];
console.log(`Catalog size after adding 1984: ${catalog.length}`);
