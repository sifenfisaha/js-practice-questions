// Question 13 — Recipe Ingredient List

// An ARRAY of OBJECTS. Here `ingredients` is a single STRING with
// commas in it, e.g. "flour,milk,egg".
const recipes = [
  { name: "pancakes", ingredients: "flour,milk,egg" },
  { name: "omelette", ingredients: "egg,cheese,milk" },
  { name: "toast", ingredients: "bread,butter" },
];

// Arrow function + OBJECT DESTRUCTURING ({ name, ingredients }).
// .split(",") turns "flour,milk,egg" into the ARRAY ["flour","milk","egg"].
// .join(", ") then glues that array back into "flour, milk, egg"
// (note the space after each comma).
const format = ({ name, ingredients }) =>
  `${name.toUpperCase()}: ${ingredients.split(",").join(", ")}`;

// .map() formats each recipe; for...of prints each line.
for (const line of recipes.map(format)) {
  console.log(line);
}

// .reduce() totals the ingredient counts. For each recipe we split its
// string into an array and use .length to count the pieces.
const totalItems = recipes.reduce(
  (sum, r) => sum + r.ingredients.split(",").length,
  0
);
console.log(`Total ingredients used: ${totalItems}`);

// .filter() keeps recipes whose ingredient string contains "egg".
// .includes() is a STRING METHOD returning true/false.
const usesEgg = recipes.filter((r) => r.ingredients.includes("egg"));
console.log(`Recipes with egg: ${usesEgg.length}`);

// .reduce() (no starting value) keeps whichever recipe has more
// ingredients, comparing the split lengths of `a` and `b`.
const most = recipes.reduce((a, b) =>
  b.ingredients.split(",").length > a.ingredients.split(",").length ? b : a
);
console.log(`Most ingredients: ${most.name} (${most.ingredients.split(",").length})`);
