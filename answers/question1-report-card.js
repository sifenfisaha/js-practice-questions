// Question 1 — Student Report Card

// `const` creates a variable that can't be reassigned.
// This one holds an ARRAY (the [ ]) of OBJECTS (each { }).
// Each object is one student with three properties: name, score, subject.
const students = [
  { name: "Abel", score: 85, subject: "Math" },
  { name: "Sara", score: 42, subject: "Math" },
  { name: "Kalkidan", score: 91, subject: "Math" },
  { name: "Dawit", score: 67, subject: "Math" },
];

// A regular function (declared with the `function` keyword).
// It takes one score and returns a letter grade using if / else.
function getGrade(score) {
  if (score >= 80) {
    return "A"; // 80 or above
  } else if (score >= 60) {
    return "B"; // between 60 and 79
  } else {
    return "F"; // below 60
  }
}

// An arrow function (the `=>` syntax) — a shorter way to write a function.
// `({ name, score })` is OBJECT DESTRUCTURING: it pulls the `name` and
// `score` properties straight out of the student object passed in.
// The backticks `...` make a TEMPLATE LITERAL, where ${ } inserts a value.
const formatStudent = ({ name, score }) =>
  `${name.toUpperCase()} scored ${score} → Grade ${getGrade(score)}`;
//   ^ .toUpperCase() is a STRING METHOD that returns the name in CAPS.

// .map() runs formatStudent on every student and returns a NEW array of
// the formatted strings (it does not change the original array).
const lines = students.map(formatStudent);

// A for...of loop goes through each item of the array one at a time.
for (const line of lines) {
  console.log(line); // print the line to the screen
}

// .filter() keeps only the items where the test returns true.
// Here we keep students who scored 60 or more (passed).
const passed = students.filter((student) => student.score >= 60);
// .length is the number of items in an array.
console.log(`Passed: ${passed.length} out of ${students.length}`);

// .reduce() boils an array down to a single value.
// `sum` starts at 0 (the second argument) and adds each score to it.
const total = students.reduce((sum, student) => sum + student.score, 0);
// `let` (unlike const) can be reassigned later if needed.
let average = total / students.length;
console.log(`Class average: ${average}`);

// A brand-new student object.
const marta = { name: "Marta", score: 78, subject: "Math" };
// The SPREAD operator (...) copies every item of `students` into a new
// array, then we add Marta. The original `students` array stays unchanged.
const allStudents = [...students, marta];
console.log(`New class size after adding Marta: ${allStudents.length}`);
