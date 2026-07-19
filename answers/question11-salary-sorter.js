// Question 11 — Employee Salary Summary

// An ARRAY of OBJECTS: each employee has a name, salary, and department.
const employees = [
  { name: "Abel", salary: 8000, dept: "eng" },
  { name: "Sara", salary: 12000, dept: "sales" },
  { name: "Kal", salary: 9500, dept: "eng" },
  { name: "Dawit", salary: 7000, dept: "sales" },
  { name: "Marta", salary: 15000, dept: "eng" },
];

// Regular function with three levels of if / else.
// (When there are 3+ outcomes, if / else is clearer than a ternary.)
function tier(salary) {
  if (salary >= 12000) return "senior";
  else if (salary >= 9000) return "mid";
  else return "junior";
}

// Arrow function + OBJECT DESTRUCTURING ({ name, salary, dept }).
const format = ({ name, salary, dept }) =>
  `${name.toUpperCase()} (${dept}) — ${salary} birr — ${tier(salary)}`;

// .map() formats each employee; for...of prints each line.
for (const line of employees.map(format)) {
  console.log(line);
}

// .find() returns the FIRST element that passes the test (or undefined
// if none do). Here: the first employee earning more than 10000.
const top = employees.find((e) => e.salary > 10000);
console.log(`First high earner: ${top.name}`);

// .some() -> true if AT LEAST ONE employee matches.
// .every() -> true only if ALL employees match.
const anyLow = employees.some((e) => e.salary < 8000);
const allPaid = employees.every((e) => e.salary >= 5000);
console.log(`Anyone under 8000: ${anyLow}`);
console.log(`Everyone over 5000: ${allPaid}`);

// .reduce() sums the salaries; Math.round() rounds the average.
const total = employees.reduce((sum, e) => sum + e.salary, 0);
let avg = Math.round(total / employees.length);
console.log(`Average salary: ${avg} birr`);

// .map() first builds an array of just the salaries, e.g. [8000, 12000, ...].
// The SPREAD (...) turns that array into separate arguments so
// Math.max / Math.min can compare them: Math.max(8000, 12000, ...).
const highest = Math.max(...employees.map((e) => e.salary));
const lowest = Math.min(...employees.map((e) => e.salary));
console.log(`Highest: ${highest}, Lowest: ${lowest}`);
