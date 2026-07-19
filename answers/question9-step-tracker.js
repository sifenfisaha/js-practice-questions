// Question 9 — Fitness Step Tracker

// An ARRAY of OBJECTS: each entry is one day and its step count.
const log = [
  { day: "mon", steps: 8200 },
  { day: "tue", steps: 4500 },
  { day: "wed", steps: 10100 },
  { day: "thu", steps: 6200 },
  { day: "fri", steps: 12000 },
];

// Regular function: did the day hit the 8000-step goal? (if / else)
function goalCheck(steps) {
  if (steps >= 8000) {
    return "goal met";
  } else {
    return "below goal";
  }
}

// Arrow function + OBJECT DESTRUCTURING ({ day, steps }).
const formatEntry = ({ day, steps }) =>
  `${day.toUpperCase()}: ${steps} steps (${goalCheck(steps)})`;

// .map() formats every entry; for...of prints each line.
const lines = log.map(formatEntry);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps days that reached 8000+ steps.
const goalDays = log.filter((entry) => entry.steps >= 8000);
console.log(`Goal met on ${goalDays.length} days`);

// .reduce() totals the steps, then we divide for the daily average.
const totalSteps = log.reduce((sum, entry) => sum + entry.steps, 0);
let dailyAverage = totalSteps / log.length;
console.log(`Total steps: ${totalSteps}`);
console.log(`Daily average: ${dailyAverage}`);

// SPREAD (...) makes a new array with Saturday added.
const fullLog = [...log, { day: "sat", steps: 9500 }];
console.log(`Logged days after Saturday: ${fullLog.length}`);
