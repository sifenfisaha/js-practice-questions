// Question 20 — Product Inventory

// An ARRAY of OBJECTS: each product has a sku, a name, current `stock`,
// and `restock` (the level at which we should reorder).
const inventory = [
  { sku: "A1", name: "pen", stock: 40, restock: 10 },
  { sku: "B2", name: "notebook", stock: 5, restock: 10 },
  { sku: "C3", name: "eraser", stock: 0, restock: 20 },
  { sku: "D4", name: "ruler", stock: 25, restock: 10 },
];

// Regular function. First an if handles the "OUT" case, then a TERNARY
// chooses "LOW" or "OK": if stock is at or below the restock level it's
// LOW, otherwise OK.
function status(stock, restock) {
  if (stock === 0) return "OUT";
  return stock <= restock ? "LOW" : "OK";
}

// Arrow function + OBJECT DESTRUCTURING ({ name, stock, restock }).
const format = ({ name, stock, restock }) =>
  `${name.toUpperCase()}: ${stock} in stock — ${status(stock, restock)}`;

// .map() formats each product; for...of prints each line.
for (const line of inventory.map(format)) {
  console.log(line);
}

// .filter() keeps items at or below their restock level.
// .map() then pulls out just the names, and .join(", ") makes one string.
const needsRestock = inventory.filter((i) => i.stock <= i.restock);
console.log(`Items to restock: ${needsRestock.map((i) => i.name).join(", ")}`);

// .reduce() adds up all stock counts.
const totalUnits = inventory.reduce((sum, i) => sum + i.stock, 0);
console.log(`Total units: ${totalUnits}`);

// .find() returns the first out-of-stock item, or undefined if none.
// `outOfStock?.name` (OPTIONAL CHAINING) avoids a crash if it's undefined,
// and `?? "none"` (NULLISH COALESCING) supplies a fallback word.
const outOfStock = inventory.find((i) => i.stock === 0);
console.log(`First out of stock: ${outOfStock?.name ?? "none"}`);

// .every() -> true only if every product has stock above 0.
const allStocked = inventory.every((i) => i.stock > 0);
console.log(`Everything in stock: ${allStocked}`);

// .map() lists all stock levels; SPREAD (...) feeds them to Math.min.
const fewest = Math.min(...inventory.map((i) => i.stock));
console.log(`Lowest stock level: ${fewest}`);
