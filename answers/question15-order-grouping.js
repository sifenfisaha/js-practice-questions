// Question 15 — Price List Summary

// This time the data is ONE OBJECT (not an array). Each KEY is a product
// name and each VALUE is its price.
const prices = {
  laptop: 45000,
  mouse: 800,
  shirt: 600,
  novel: 350,
  jeans: 1200,
};

// Object.entries(prices) turns the object into an array of [key, value]
// pairs, e.g. [["laptop", 45000], ["mouse", 800], ...].
// `[item, price]` is ARRAY DESTRUCTURING: it names the two parts of
// each pair as we loop with for...of.
for (const [item, price] of Object.entries(prices)) {
  console.log(`${item.toUpperCase()}: ${price} birr`);
}

// Object.keys(prices) -> array of just the names: ["laptop","mouse",...].
const names = Object.keys(prices);
console.log(`Products: ${names.length}`);

// Object.values(prices) -> array of just the prices: [45000, 800, ...].
const values = Object.values(prices);
// .reduce() adds those prices into one total.
const total = values.reduce((sum, p) => sum + p, 0);
console.log(`Total value: ${total} birr`);

// SPREAD (...) passes each price as a separate argument to Math.max/min.
const dearest = Math.max(...values);
const cheapest = Math.min(...values);
console.log(`Most expensive: ${dearest} birr, cheapest: ${cheapest} birr`);

// .filter() keeps prices under 1000; .length counts them.
const cheapCount = values.filter((p) => p < 1000).length;
console.log(`Under 1000 birr: ${cheapCount}`);
