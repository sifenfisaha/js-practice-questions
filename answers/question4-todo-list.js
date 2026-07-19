// Question 4 — To-Do List Manager

// An ARRAY of OBJECTS. `done` is a BOOLEAN (true/false),
// `priority` is a string that is either "high" or "low".
const todos = [
  { task: "wash dishes", done: true, priority: "low" },
  { task: "do homework", done: false, priority: "high" },
  { task: "call mom", done: true, priority: "high" },
  { task: "buy groceries", done: false, priority: "low" },
  { task: "study javascript", done: false, priority: "high" },
];

// Regular function: pick a checkbox icon based on the boolean.
function statusIcon(done) {
  if (done) {
    return "[x]"; // done
  } else {
    return "[ ]"; // not done
  }
}

// Arrow function + OBJECT DESTRUCTURING ({ task, done, priority }).
const formatTodo = ({ task, done, priority }) =>
  `${statusIcon(done)} ${task.toUpperCase()} (${priority})`;

// .map() formats every task; for...of prints each line.
const lines = todos.map(formatTodo);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps tasks that are NOT done. The `!` flips true/false,
// so `!todo.done` is true when the task is still open.
const remaining = todos.filter((todo) => !todo.done);
console.log(`Tasks remaining: ${remaining.length}`);

// .reduce() counts high-priority tasks by adding 1 for each match.
// `todo.priority === "high" ? 1 : 0` is a ternary: "high" -> 1, else 0.
let highCount = todos.reduce(
  (count, todo) => count + (todo.priority === "high" ? 1 : 0),
  0
);
console.log(`High priority tasks: ${highCount}`);

// SPREAD (...) copies the list and adds one more task.
const allTodos = [...todos, { task: "sleep early", done: false, priority: "low" }];
console.log(`Total tasks after adding one more: ${allTodos.length}`);
