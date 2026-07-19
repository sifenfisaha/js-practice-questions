// Question 12 — Quiz Score Analyzer

// An ARRAY of OBJECTS: each student has how many they got `correct`
// and the `total` number of questions.
const students = [
  { name: "abel", correct: 5, total: 5 },
  { name: "sara", correct: 3, total: 5 },
  { name: "kal", correct: 4, total: 5 },
];

// Regular function. Math.round() gives a whole-number percentage.
// The TERNARY `pct >= 80 ? "PASS" : "FAIL"` is a compact if / else:
//   if pct >= 80 use "PASS", otherwise use "FAIL".
function grade(correct, total) {
  const pct = Math.round((correct / total) * 100);
  return pct >= 80 ? "PASS" : "FAIL";
}

// Arrow function + OBJECT DESTRUCTURING ({ name, correct, total }).
const format = ({ name, correct, total }) =>
  `${name.toUpperCase()}: ${correct}/${total} → ${grade(correct, total)}`;

// .map() formats each student; for...of prints each line.
for (const line of students.map(format)) {
  console.log(line);
}

// .filter() keeps students whose grade is "PASS".
const passed = students.filter((s) => grade(s.correct, s.total) === "PASS");
console.log(`Passed: ${passed.length} of ${students.length}`);

// .reduce() with no starting value: `a` begins as the first student and
// `b` is each next one. We keep whichever has more correct answers, so
// the result is the single best student.
const best = students.reduce((a, b) => (b.correct > a.correct ? b : a));
console.log(`Best: ${best.name.toUpperCase()} with ${best.correct}`);

// .every() -> true only if ALL students scored at least 1.
const allTried = students.every((s) => s.correct > 0);
console.log(`Everyone scored at least 1: ${allTried}`);
