// Question 14 — Gym Class Board

// An ARRAY of OBJECTS: each class has a name, the hour it starts (0-23),
// its capacity, and how many people already booked.
const classes = [
  { name: "yoga", hour: 9, capacity: 20, booked: 18 },
  { name: "spin", hour: 18, capacity: 15, booked: 15 },
  { name: "pilates", hour: 12, capacity: 12, booked: 5 },
  { name: "boxing", hour: 7, capacity: 10, booked: 9 },
];

// Regular function with three levels of if / else.
function slot(hour) {
  if (hour < 12) return "morning";
  else if (hour < 17) return "afternoon";
  else return "evening";
}

// Arrow function + OBJECT DESTRUCTURING. Returns free seats for a class.
const seatsLeft = ({ capacity, booked }) => capacity - booked;

// This arrow function has a BODY ({ ... }) instead of a one-line return,
// so it needs its own `return`.
const format = (cls) => {
  const { name, hour } = cls; // destructure the two fields we display
  const left = seatsLeft(cls);
  // TERNARY: if no seats left show "FULL", otherwise show "N seats".
  const status = left === 0 ? "FULL" : `${left} seats`;
  return `${name.toUpperCase()} @ ${hour}:00 (${slot(hour)}) — ${status}`;
};

// .map() formats each class; for...of prints each line.
for (const line of classes.map(format)) {
  console.log(line);
}

// .filter() keeps classes that still have open seats.
const open = classes.filter((c) => seatsLeft(c) > 0);
console.log(`Classes with space: ${open.length}`);

// .some() -> true if any class is full. .every() -> true if all have 5+ booked.
const anyFull = classes.some((c) => seatsLeft(c) === 0);
const allBusy = classes.every((c) => c.booked >= 5);
console.log(`Any full classes: ${anyFull}`);
console.log(`Every class has 5+ booked: ${allBusy}`);

// .reduce() totals all bookings.
const totalBooked = classes.reduce((sum, c) => sum + c.booked, 0);
console.log(`Total bookings: ${totalBooked}`);

// .find() returns the first full class, or undefined if there is none.
// `firstFull?.name` is OPTIONAL CHAINING: if firstFull is undefined it
// safely gives undefined instead of crashing.
// `?? "none"` is NULLISH COALESCING: use "none" when the left side is
// null/undefined.
const firstFull = classes.find((c) => seatsLeft(c) === 0);
console.log(`First full class: ${firstFull?.name ?? "none"}`);
