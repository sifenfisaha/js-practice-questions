// Question 2 — Shopping Cart Total

// An ARRAY of OBJECTS. Each object is one cart item with a name,
// a unit price, and how many were bought (quantity).
const cart = [
  { name: "apple", price: 10, quantity: 3 },
  { name: "bread", price: 25, quantity: 1 },
  { name: "milk", price: 18, quantity: 2 },
  { name: "chocolate", price: 55, quantity: 1 },
];

// Regular function: cost of ONE item = its price times its quantity.
function itemTotal(item) {
  return item.price * item.quantity;
}

// Arrow function with OBJECT DESTRUCTURING ({ name, price, quantity }).
// Returns a TEMPLATE LITERAL like "APPLE x3 = 30 birr".
const formatItem = ({ name, price, quantity }) =>
  `${name.toUpperCase()} x${quantity} = ${price * quantity} birr`;

// .map() -> new array of formatted strings; for...of prints each one.
const lines = cart.map(formatItem);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps only items whose unit price is above 20.
const expensive = cart.filter((item) => item.price > 20);
console.log(`Expensive items (over 20 birr): ${expensive.length}`);

// .reduce() adds up every item's total into one grand total.
// It calls itemTotal(item) for each item and accumulates it in `sum`.
let grandTotal = cart.reduce((sum, item) => sum + itemTotal(item), 0);
console.log(`Grand total: ${grandTotal} birr`);

// if / else picks one message based on the total.
if (grandTotal > 100) {
  console.log("Free delivery unlocked!");
} else {
  console.log("Add more items for free delivery.");
}

// SPREAD (...) copies the old cart into a new array and adds one item.
const updatedCart = [...cart, { name: "water", price: 8, quantity: 6 }];
console.log(`Cart now has ${updatedCart.length} items`);
