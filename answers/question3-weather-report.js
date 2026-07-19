// Question 3 — Weekly Weather Report

// An ARRAY of OBJECTS: each day has a name and a temperature in °C.
const week = [
  { day: "Monday", temp: 21 },
  { day: "Tuesday", temp: 28 },
  { day: "Wednesday", temp: 31 },
  { day: "Thursday", temp: 19 },
  { day: "Friday", temp: 26 },
];

// Regular function: turn a number into a word using if / else.
function describe(temp) {
  if (temp >= 30) {
    return "Hot";
  } else if (temp >= 25) {
    return "Warm";
  } else {
    return "Cool";
  }
}

// Arrow function + OBJECT DESTRUCTURING ({ day, temp }).
// TEMPLATE LITERAL builds "MONDAY: 21°C (Cool)".
const formatDay = ({ day, temp }) =>
  `${day.toUpperCase()}: ${temp}°C (${describe(temp)})`;

// .map() formats every day; for...of prints each line.
const lines = week.map(formatDay);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps days that are 25°C or warmer.
const warmDays = week.filter((entry) => entry.temp >= 25);
console.log(`Warm or hot days: ${warmDays.length}`);

// .reduce() sums all temperatures; then we compute the average.
const totalTemp = week.reduce((sum, entry) => sum + entry.temp, 0);
let averageTemp = totalTemp / week.length;
console.log(`Average temperature: ${averageTemp}°C`);

// SPREAD (...) makes a new array with Saturday added on the end.
const fullWeek = [...week, { day: "Saturday", temp: 24 }];
console.log(`Days recorded after adding Saturday: ${fullWeek.length}`);
