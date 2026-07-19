// Question 16 — Country Population List

// An ARRAY of OBJECTS: each country has a name, population in millions,
// and continent.
const countries = [
  { name: "ethiopia", millions: 126, continent: "africa" },
  { name: "kenya", millions: 54, continent: "africa" },
  { name: "japan", millions: 125, continent: "asia" },
  { name: "france", millions: 68, continent: "europe" },
  { name: "egypt", millions: 111, continent: "africa" },
];

// Arrow function + OBJECT DESTRUCTURING, plus a second argument `position`
// (the number we print in front, like "1.").
const format = ({ name, millions, continent }, position) =>
  `${position}. ${name.toUpperCase()} — ${millions}M (${continent})`;

// .forEach() runs a function for each item but returns nothing.
// Its second argument `i` is the INDEX (0, 1, 2, ...), so `i + 1` gives
// human-friendly positions 1, 2, 3, ...
countries.forEach((c, i) => console.log(format(c, i + 1)));

// .map() builds an array of populations; SPREAD (...) feeds them to
// Math.max / Math.min.
const biggest = Math.max(...countries.map((c) => c.millions));
const smallest = Math.min(...countries.map((c) => c.millions));
console.log(`Biggest: ${biggest}M, Smallest: ${smallest}M`);

// .filter() keeps African countries; .reduce() totals their populations.
const africa = countries.filter((c) => c.continent === "africa");
const africaTotal = africa.reduce((sum, c) => sum + c.millions, 0);
console.log(`African countries: ${africa.length}, total ${africaTotal}M`);

// .some() -> true if at least one country is in Asia.
const hasAsia = countries.some((c) => c.continent === "asia");
console.log(`Includes an Asian country: ${hasAsia}`);

// .reduce() sums everything; Math.round() rounds the average.
const avg = Math.round(
  countries.reduce((sum, c) => sum + c.millions, 0) / countries.length
);
console.log(`Average population: ${avg}M`);
