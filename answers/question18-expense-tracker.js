// Question 18 — Expense Tracker

// An ARRAY of OBJECTS: each expense has a note, an amount, and a tag
// (its category).
const expenses = [
  { note: "lunch", amount: 150, tag: "food" },
  { note: "taxi", amount: 90, tag: "transport" },
  { note: "dinner", amount: 220, tag: "food" },
  { note: "bus", amount: 30, tag: "transport" },
  { note: "movie", amount: 120, tag: "fun" },
];

// Regular function with three levels of if / else to size the expense.
function level(amount) {
  if (amount >= 200) return "big";
  else if (amount >= 100) return "medium";
  else return "small";
}

// Arrow function + OBJECT DESTRUCTURING ({ note, amount, tag }).
const format = ({ note, amount, tag }) =>
  `${note.toUpperCase()} — ${amount} birr [${tag}] (${level(amount)})`;

// .map() formats each expense; for...of prints each line.
for (const line of expenses.map(format)) {
  console.log(line);
}

// .reduce() adds up every amount for the grand total.
const total = expenses.reduce((sum, e) => sum + e.amount, 0);
console.log(`Total spent: ${total} birr`);

// .filter() keeps only "food" expenses, then .reduce() totals them.
const foodOnly = expenses.filter((e) => e.tag === "food");
const foodTotal = foodOnly.reduce((sum, e) => sum + e.amount, 0);
console.log(`Food spending: ${foodTotal} birr`);

// .reduce() (no starting value) keeps whichever expense is larger, so
// it ends up holding the single biggest expense.
const priciest = expenses.reduce((a, b) => (b.amount > a.amount ? b : a));
console.log(`Biggest expense: ${priciest.note} (${priciest.amount} birr)`);

// .some() -> true if any single expense is over 200.
const overBudget = expenses.some((e) => e.amount > 200);
console.log(`Any single expense over 200: ${overBudget}`);

// .filter() keeps expenses whose level is "big"; .length counts them.
const bigOnes = expenses.filter((e) => level(e.amount) === "big");
console.log(`Big expenses: ${bigOnes.length}`);
