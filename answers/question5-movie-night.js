// Question 5 — Movie Night Picker

// An ARRAY of OBJECTS: each movie has a title, a rating out of 10,
// and a runtime in minutes.
const movies = [
  { title: "inception", rating: 9, minutes: 148 },
  { title: "cars", rating: 7, minutes: 117 },
  { title: "titanic", rating: 8, minutes: 195 },
  { title: "shrek", rating: 6, minutes: 90 },
];

// Regular function: turn a rating into a verdict using if / else.
function verdict(rating) {
  if (rating >= 8) {
    return "Must watch";
  } else if (rating >= 7) {
    return "Good";
  } else {
    return "Skip";
  }
}

// Arrow function + OBJECT DESTRUCTURING ({ title, rating }).
const formatMovie = ({ title, rating }) =>
  `${title.toUpperCase()} — ${rating}/10 — ${verdict(rating)}`;

// .map() formats every movie; for...of prints each line.
const lines = movies.map(formatMovie);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps movies shorter than 120 minutes.
const shortMovies = movies.filter((movie) => movie.minutes < 120);
console.log(`Short movies (under 120 min): ${shortMovies.length}`);

// .reduce() adds up all the runtimes.
let totalMinutes = movies.reduce((sum, movie) => sum + movie.minutes, 0);
console.log(`Total runtime: ${totalMinutes} minutes`);

// SPREAD (...) makes a new array with Coco added.
const watchlist = [...movies, { title: "coco", rating: 8, minutes: 105 }];
console.log(`Watchlist size after adding Coco: ${watchlist.length}`);
