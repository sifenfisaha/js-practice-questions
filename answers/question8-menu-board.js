// Question 8 — Restaurant Menu Board

// An ARRAY of OBJECTS: each dish has a name, a price, and `spicy`
// (a BOOLEAN: true = spicy, false = mild).
const menu = [
  { dish: "doro wat", price: 180, spicy: true },
  { dish: "pasta", price: 120, spicy: false },
  { dish: "kitfo", price: 200, spicy: true },
  { dish: "salad", price: 90, spicy: false },
];

// Regular function: turn the boolean into a label.
function spicyLabel(spicy) {
  if (spicy) {
    return "🌶 spicy";
  } else {
    return "mild";
  }
}

// Arrow function + OBJECT DESTRUCTURING ({ dish, price, spicy }).
const formatDish = ({ dish, price, spicy }) =>
  `${dish.toUpperCase()} — ${price} birr — ${spicyLabel(spicy)}`;

// .map() formats every dish; for...of prints each line.
const lines = menu.map(formatDish);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps only the dishes where spicy is true.
const spicyDishes = menu.filter((item) => item.spicy);
console.log(`Spicy dishes: ${spicyDishes.length}`);

// .reduce() adds every price together (cost of one of everything).
let total = menu.reduce((sum, item) => sum + item.price, 0);
console.log(`One of everything: ${total} birr`);

// if / else picks a message based on the total.
if (total > 500) {
  console.log("This is a feast!");
} else {
  console.log("A reasonable meal.");
}

// SPREAD (...) makes a new array with "tibs" added.
const fullMenu = [...menu, { dish: "tibs", price: 190, spicy: true }];
console.log(`Menu now has ${fullMenu.length} dishes`);
