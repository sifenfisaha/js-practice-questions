// Question 10 — Simple Bank Account Statement

// An ARRAY of OBJECTS: each transaction has a label, an amount
// (positive = money in, negative = money out), and a type.
const transactions = [
  { label: "salary", amount: 5000, type: "deposit" },
  { label: "rent", amount: -2000, type: "withdrawal" },
  { label: "groceries", amount: -750, type: "withdrawal" },
  { label: "freelance gig", amount: 1200, type: "deposit" },
  { label: "internet bill", amount: -450, type: "withdrawal" },
];

// Regular function: is money coming IN or going OUT? (if / else)
function direction(amount) {
  if (amount > 0) {
    return "IN";
  } else {
    return "OUT";
  }
}

// Arrow function + OBJECT DESTRUCTURING ({ label, amount }).
const formatTx = ({ label, amount }) =>
  `${label.toUpperCase()}: ${amount} birr (${direction(amount)})`;

// .map() formats every transaction; for...of prints each line.
const lines = transactions.map(formatTx);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps deposits. .includes() checks the `type` string.
const deposits = transactions.filter((tx) => tx.type.includes("deposit"));
console.log(`Deposits: ${deposits.length}`);

// .reduce() adds every amount together to get the final balance.
// Negative amounts subtract automatically because we're adding a
// negative number.
let balance = transactions.reduce((sum, tx) => sum + tx.amount, 0);
console.log(`Final balance: ${balance} birr`);

// if / else reports the account health.
if (balance > 0) {
  console.log("Account is healthy.");
} else {
  console.log("Warning: overdrawn!");
}

// SPREAD (...) makes a new array with a coffee purchase added.
const fullStatement = [...transactions, { label: "coffee", amount: -80, type: "withdrawal" }];
console.log(`Transactions after adding coffee: ${fullStatement.length}`);
