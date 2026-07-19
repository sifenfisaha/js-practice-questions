// Question 19 — Sentence Word Tools

// A plain STRING we will analyze.
const sentence = "the quick brown fox jumps";

// .split(" ") cuts the string at each space into an ARRAY of words:
// ["the","quick","brown","fox","jumps"]. .length counts them.
const words = sentence.split(" ");
console.log(`Word count: ${words.length}`);

// .map() makes an UPPERCASE copy of each word; for...of prints each one
// on its own line.
for (const w of words.map((word) => word.toUpperCase())) {
  console.log(w);
}

// .filter() keeps words with 5 or more letters (a string's .length is
// its number of characters).
const longWords = words.filter((w) => w.length >= 5);
console.log(`Long words (5+ letters): ${longWords.length}`);

// .join("-") glues the words back into one string with dashes between.
const slug = words.join("-");
console.log(`Slug: ${slug}`);

// .some() -> true if any word is exactly "fox".
const hasFox = words.some((w) => w === "fox");
console.log(`Contains "fox": ${hasFox}`);

// .reduce() (no starting value) keeps whichever word is longer, ending
// up with the longest word overall.
const longest = words.reduce((a, b) => (b.length > a.length ? b : a));
console.log(`Longest word: ${longest.toUpperCase()} (${longest.length} letters)`);

// .reduce() adds up the letter counts of every word.
const totalLetters = words.reduce((sum, w) => sum + w.length, 0);
console.log(`Total letters: ${totalLetters}`);
