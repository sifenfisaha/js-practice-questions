# JavaScript Practice Questions — 10 Mini Projects (One Per Person)

**How to use this file:**
- There are **10 questions**, one for each person. Everyone gets a different theme, but every question has the **same difficulty level** and uses the **same 15 core JavaScript concepts**.
- Everything can be built with **plain JavaScript only** — no HTML, no libraries, no frameworks.
- Run your file with Node.js: `node yourfile.js` (or paste it into the browser console).
- Your program must print output with `console.log()` that matches the **Expected Output** shown under each question.
- **Stuck?** Fully commented reference solutions for every question (Part 1 and Part 2) live in the [`answers/`](answers/) directory — try it yourself first, then compare.

**The 15 concepts every question uses:**

| #  | Concept                                      |
|----|----------------------------------------------|
| 1  | `const` and `let` variables                  |
| 2  | Arrays                                       |
| 3  | Objects                                      |
| 4  | Regular functions (`function` keyword)       |
| 5  | Arrow functions (`=>`)                       |
| 6  | Template literals (`` `Hello ${name}` ``)    |
| 7  | `for...of` loop                              |
| 8  | `if / else` conditionals                     |
| 9  | Array `.map()`                               |
| 10 | Array `.filter()`                            |
| 11 | Array `.reduce()` (or a manual sum loop)     |
| 12 | Object destructuring                         |
| 13 | Spread operator (`...`)                      |
| 14 | String methods (`.toUpperCase()`, `.includes()`, etc.) |
| 15 | `console.log()` output                       |

---

## Question 1 — Student Report Card (Person 1)

**Scenario:** You are building a small report-card printer for a class of students.

**Step-by-step requirements:**

1. Create a `const` array called `students`. Each student is an **object** with three properties: `name` (string), `score` (number), and `subject` (string). Add exactly these 4 students:
   - `"Abel"`, score `85`, subject `"Math"`
   - `"Sara"`, score `42`, subject `"Math"`
   - `"Kalkidan"`, score `91`, subject `"Math"`
   - `"Dawit"`, score `67`, subject `"Math"`
2. Write a **regular function** `getGrade(score)` that returns `"A"` if the score is 80 or above, `"B"` if it is 60 or above, and `"F"` otherwise (use `if / else`).
3. Write an **arrow function** `formatStudent` that takes a student object, uses **object destructuring** to pull out `name` and `score`, and returns a **template literal** string like: `` `ABEL scored 85 → Grade A` `` — the name must be converted with `.toUpperCase()`.
4. Use `.map()` to turn every student into a formatted string, then use a **`for...of` loop** to print each line.
5. Use `.filter()` to get only students who passed (score `>= 60`) and print how many passed using the array's `.length`.
6. Use `.reduce()` to compute the total of all scores, then use `let` to store the average (total divided by number of students) and print it.
7. Create a new student object `{ name: "Marta", score: 78, subject: "Math" }`, then use the **spread operator** to build a new array `allStudents` containing the old students plus Marta. Print the new class size.

**Expected Output:**

```
ABEL scored 85 → Grade A
SARA scored 42 → Grade F
KALKIDAN scored 91 → Grade A
DAWIT scored 67 → Grade B
Passed: 3 out of 4
Class average: 71.25
New class size after adding Marta: 5
```

---

## Question 2 — Shopping Cart Total (Person 2)

**Scenario:** You are building the checkout summary of a tiny online shop.

**Step-by-step requirements:**

1. Create a `const` array called `cart`. Each item is an **object** with `name` (string), `price` (number), and `quantity` (number). Add exactly these 4 items:
   - `"apple"`, price `10`, quantity `3`
   - `"bread"`, price `25`, quantity `1`
   - `"milk"`, price `18`, quantity `2`
   - `"chocolate"`, price `55`, quantity `1`
2. Write a **regular function** `itemTotal(item)` that returns `price * quantity` for one item.
3. Write an **arrow function** `formatItem` that uses **object destructuring** to pull out `name`, `price`, and `quantity`, and returns a **template literal** like: `` `APPLE x3 = 30 birr` `` — the item name must be `.toUpperCase()`.
4. Use `.map()` to format every cart item, then print each line with a **`for...of` loop**.
5. Use `.filter()` to find items that cost more than `20` birr per unit and print how many there are.
6. Use `.reduce()` to compute the grand total of the whole cart and store it with `let`.
7. Use `if / else`: if the grand total is above `100`, print `"Free delivery unlocked!"`; otherwise print `"Add more items for free delivery."`
8. Use the **spread operator** to create a new array `updatedCart` that adds one more item: `{ name: "water", price: 8, quantity: 6 }`. Print the new number of items in the cart.

**Expected Output:**

```
APPLE x3 = 30 birr
BREAD x1 = 25 birr
MILK x2 = 36 birr
CHOCOLATE x1 = 55 birr
Expensive items (over 20 birr): 2
Grand total: 146 birr
Free delivery unlocked!
Cart now has 5 items
```

---

## Question 3 — Weekly Weather Report (Person 3)

**Scenario:** You are building a simple weather summary for one week.

**Step-by-step requirements:**

1. Create a `const` array called `week`. Each day is an **object** with `day` (string) and `temp` (number in °C). Add exactly these 5 days:
   - `"Monday"`, `21`
   - `"Tuesday"`, `28`
   - `"Wednesday"`, `31`
   - `"Thursday"`, `19`
   - `"Friday"`, `26`
2. Write a **regular function** `describe(temp)` that returns `"Hot"` if temp is 30 or above, `"Warm"` if it is 25 or above, and `"Cool"` otherwise (use `if / else`).
3. Write an **arrow function** `formatDay` that uses **object destructuring** to pull out `day` and `temp`, and returns a **template literal** like: `` `MONDAY: 21°C (Cool)` `` — the day name must be `.toUpperCase()`.
4. Use `.map()` to format all days and print each line with a **`for...of` loop**.
5. Use `.filter()` to find the warm-or-hot days (temp `>= 25`) and print how many there are.
6. Use `.reduce()` to sum all temperatures, store the average in a `let` variable, and print it.
7. Use the **spread operator** to create a new array `fullWeek` that adds `{ day: "Saturday", temp: 24 }`. Print the new number of days recorded.

**Expected Output:**

```
MONDAY: 21°C (Cool)
TUESDAY: 28°C (Warm)
WEDNESDAY: 31°C (Hot)
THURSDAY: 19°C (Cool)
FRIDAY: 26°C (Warm)
Warm or hot days: 3
Average temperature: 25°C
Days recorded after adding Saturday: 6
```

---

## Question 4 — To-Do List Manager (Person 4)

**Scenario:** You are building a console to-do list summary.

**Step-by-step requirements:**

1. Create a `const` array called `todos`. Each task is an **object** with `task` (string), `done` (boolean), and `priority` (string: `"high"` or `"low"`). Add exactly these 5 tasks:
   - `"wash dishes"`, done `true`, priority `"low"`
   - `"do homework"`, done `false`, priority `"high"`
   - `"call mom"`, done `true`, priority `"high"`
   - `"buy groceries"`, done `false`, priority `"low"`
   - `"study javascript"`, done `false`, priority `"high"`
2. Write a **regular function** `statusIcon(done)` that uses `if / else` to return `"[x]"` when done is `true` and `"[ ]"` when it is `false`.
3. Write an **arrow function** `formatTodo` that uses **object destructuring** to pull out `task`, `done`, and `priority`, and returns a **template literal** like: `` `[x] WASH DISHES (low)` `` — the task must be `.toUpperCase()`.
4. Use `.map()` to format all tasks and print each with a **`for...of` loop**.
5. Use `.filter()` to count how many tasks are still not done and print the count.
6. Use `.reduce()` to count how many tasks are `"high"` priority (add `1` for each high-priority task, `0` otherwise), store it with `let`, and print it.
7. Use the **spread operator** to add a new task `{ task: "sleep early", done: false, priority: "low" }` into a new array `allTodos`. Print the new total number of tasks.

**Expected Output:**

```
[x] WASH DISHES (low)
[ ] DO HOMEWORK (high)
[x] CALL MOM (high)
[ ] BUY GROCERIES (low)
[ ] STUDY JAVASCRIPT (high)
Tasks remaining: 3
High priority tasks: 3
Total tasks after adding one more: 6
```

---

## Question 5 — Movie Night Picker (Person 5)

**Scenario:** You are building a movie list summary for a movie night.

**Step-by-step requirements:**

1. Create a `const` array called `movies`. Each movie is an **object** with `title` (string), `rating` (number out of 10), and `minutes` (number). Add exactly these 4 movies:
   - `"inception"`, rating `9`, minutes `148`
   - `"cars"`, rating `7`, minutes `117`
   - `"titanic"`, rating `8`, minutes `195`
   - `"shrek"`, rating `6`, minutes `90`
2. Write a **regular function** `verdict(rating)` that uses `if / else` to return `"Must watch"` if rating is 8 or above, `"Good"` if 7 or above, and `"Skip"` otherwise.
3. Write an **arrow function** `formatMovie` that uses **object destructuring** to pull out `title` and `rating`, and returns a **template literal** like: `` `INCEPTION — 9/10 — Must watch` `` — the title must be `.toUpperCase()`.
4. Use `.map()` to format every movie and print each line with a **`for...of` loop**.
5. Use `.filter()` to find movies shorter than `120` minutes and print how many are "short movies".
6. Use `.reduce()` to compute the total minutes of all movies, store it with `let`, and print it.
7. Use the **spread operator** to add `{ title: "coco", rating: 8, minutes: 105 }` into a new array `watchlist`. Print the new watchlist size.

**Expected Output:**

```
INCEPTION — 9/10 — Must watch
CARS — 7/10 — Good
TITANIC — 8/10 — Must watch
SHREK — 6/10 — Skip
Short movies (under 120 min): 2
Total runtime: 550 minutes
Watchlist size after adding Coco: 5
```

---

## Question 6 — Library Book Tracker (Person 6)

**Scenario:** You are building a summary screen for a small library.

**Step-by-step requirements:**

1. Create a `const` array called `books`. Each book is an **object** with `title` (string), `pages` (number), and `available` (boolean). Add exactly these 4 books:
   - `"atomic habits"`, pages `320`, available `true`
   - `"clean code"`, pages `464`, available `false`
   - `"the alchemist"`, pages `208`, available `true`
   - `"deep work"`, pages `304`, available `false`
2. Write a **regular function** `availability(available)` that uses `if / else` to return `"On shelf"` when `true` and `"Borrowed"` when `false`.
3. Write an **arrow function** `formatBook` that uses **object destructuring** to pull out `title`, `pages`, and `available`, and returns a **template literal** like: `` `ATOMIC HABITS (320 pages) — On shelf` `` — the title must be `.toUpperCase()`.
4. Use `.map()` to format every book and print each line with a **`for...of` loop**.
5. Use `.filter()` to count only the available books and print the count.
6. Use `.reduce()` to compute the total pages across all books, store it with `let`, and print it.
7. Use a string method: check if any formatted line `.includes("CLEAN CODE")` on the first matching line and print `"Clean Code is in the catalog: true"` using the result.
8. Use the **spread operator** to add `{ title: "1984", pages: 328, available: true }` into a new array `catalog`. Print the new catalog size.

**Expected Output:**

```
ATOMIC HABITS (320 pages) — On shelf
CLEAN CODE (464 pages) — Borrowed
THE ALCHEMIST (208 pages) — On shelf
DEEP WORK (304 pages) — Borrowed
Available books: 2
Total pages in library: 1296
Clean Code is in the catalog: true
Catalog size after adding 1984: 5
```

---

## Question 7 — Playlist Summary (Person 7)

**Scenario:** You are building a summary for a music playlist.

**Step-by-step requirements:**

1. Create a `const` array called `playlist`. Each song is an **object** with `title` (string), `artist` (string), and `seconds` (number). Add exactly these 4 songs:
   - `"tizita"`, artist `"Mulatu"`, seconds `240`
   - `"blinding lights"`, artist `"The Weeknd"`, seconds `200`
   - `"perfect"`, artist `"Ed Sheeran"`, seconds `263`
   - `"believer"`, artist `"Imagine Dragons"`, seconds `204`
2. Write a **regular function** `lengthLabel(seconds)` that uses `if / else` to return `"long"` if the song is 240 seconds or more and `"short"` otherwise.
3. Write an **arrow function** `formatSong` that uses **object destructuring** to pull out `title`, `artist`, and `seconds`, and returns a **template literal** like: `` `TIZITA by Mulatu (240s, long)` `` — the title must be `.toUpperCase()`.
4. Use `.map()` to format every song and print each line with a **`for...of` loop**.
5. Use `.filter()` to count the short songs (under 240 seconds) and print the count.
6. Use `.reduce()` to compute the total seconds of the playlist. Store the total minutes (`total / 60`, rounded with `Math.round`) in a `let` variable and print it.
7. Use the **spread operator** to add `{ title: "halo", artist: "Beyonce", seconds: 261 }` into a new array `newPlaylist`. Print the new number of songs.

**Expected Output:**

```
TIZITA by Mulatu (240s, long)
BLINDING LIGHTS by The Weeknd (200s, short)
PERFECT by Ed Sheeran (263s, long)
BELIEVER by Imagine Dragons (204s, short)
Short songs: 2
Total playlist length: 15 minutes
Songs after adding Halo: 5
```

---

## Question 8 — Restaurant Menu Board (Person 8)

**Scenario:** You are building a printed menu board for a small restaurant.

**Step-by-step requirements:**

1. Create a `const` array called `menu`. Each dish is an **object** with `dish` (string), `price` (number), and `spicy` (boolean). Add exactly these 4 dishes:
   - `"doro wat"`, price `180`, spicy `true`
   - `"pasta"`, price `120`, spicy `false`
   - `"kitfo"`, price `200`, spicy `true`
   - `"salad"`, price `90`, spicy `false`
2. Write a **regular function** `spicyLabel(spicy)` that uses `if / else` to return `"🌶 spicy"` when `true` and `"mild"` when `false`.
3. Write an **arrow function** `formatDish` that uses **object destructuring** to pull out `dish`, `price`, and `spicy`, and returns a **template literal** like: `` `DORO WAT — 180 birr — 🌶 spicy` `` — the dish name must be `.toUpperCase()`.
4. Use `.map()` to format every dish and print each line with a **`for...of` loop**.
5. Use `.filter()` to count the spicy dishes and print the count.
6. Use `.reduce()` to compute the price of ordering one of everything, store it with `let`, and print it.
7. Use `if / else`: if the total is above `500`, print `"This is a feast!"`; otherwise print `"A reasonable meal."`
8. Use the **spread operator** to add `{ dish: "tibs", price: 190, spicy: true }` into a new array `fullMenu`. Print the new number of dishes.

**Expected Output:**

```
DORO WAT — 180 birr — 🌶 spicy
PASTA — 120 birr — mild
KITFO — 200 birr — 🌶 spicy
SALAD — 90 birr — mild
Spicy dishes: 2
One of everything: 590 birr
This is a feast!
Menu now has 5 dishes
```

---

## Question 9 — Fitness Step Tracker (Person 9)

**Scenario:** You are building a weekly step-count summary for a fitness app.

**Step-by-step requirements:**

1. Create a `const` array called `log`. Each entry is an **object** with `day` (string) and `steps` (number). Add exactly these 5 entries:
   - `"mon"`, `8200`
   - `"tue"`, `4500`
   - `"wed"`, `10100`
   - `"thu"`, `6200`
   - `"fri"`, `12000`
2. Write a **regular function** `goalCheck(steps)` that uses `if / else` to return `"goal met"` if steps are 8000 or more and `"below goal"` otherwise.
3. Write an **arrow function** `formatEntry` that uses **object destructuring** to pull out `day` and `steps`, and returns a **template literal** like: `` `MON: 8200 steps (goal met)` `` — the day must be `.toUpperCase()`.
4. Use `.map()` to format every entry and print each line with a **`for...of` loop**.
5. Use `.filter()` to count the days the goal was met (steps `>= 8000`) and print the count.
6. Use `.reduce()` to compute total weekly steps, store the daily average in a `let` variable (total divided by number of days), and print both.
7. Use the **spread operator** to add `{ day: "sat", steps: 9500 }` into a new array `fullLog`. Print the new number of logged days.

**Expected Output:**

```
MON: 8200 steps (goal met)
TUE: 4500 steps (below goal)
WED: 10100 steps (goal met)
THU: 6200 steps (below goal)
FRI: 12000 steps (goal met)
Goal met on 3 days
Total steps: 41000
Daily average: 8200
Logged days after Saturday: 6
```

---

## Question 10 — Simple Bank Account Statement (Person 10)

**Scenario:** You are building a mini bank statement printer.

**Step-by-step requirements:**

1. Create a `const` array called `transactions`. Each transaction is an **object** with `label` (string), `amount` (number — positive for deposits, negative for withdrawals), and `type` (string: `"deposit"` or `"withdrawal"`). Add exactly these 5 transactions:
   - `"salary"`, `5000`, `"deposit"`
   - `"rent"`, `-2000`, `"withdrawal"`
   - `"groceries"`, `-750`, `"withdrawal"`
   - `"freelance gig"`, `1200`, `"deposit"`
   - `"internet bill"`, `-450`, `"withdrawal"`
2. Write a **regular function** `direction(amount)` that uses `if / else` to return `"IN"` if the amount is positive and `"OUT"` otherwise.
3. Write an **arrow function** `formatTx` that uses **object destructuring** to pull out `label` and `amount`, and returns a **template literal** like: `` `SALARY: 5000 birr (IN)` `` — the label must be `.toUpperCase()`.
4. Use `.map()` to format every transaction and print each line with a **`for...of` loop**.
5. Use `.filter()` to count only the deposits (use a string comparison on `type`, or `.includes("deposit")`) and print the count.
6. Use `.reduce()` to compute the final balance (sum of all amounts), store it with `let`, and print it.
7. Use `if / else`: if the balance is positive, print `"Account is healthy."`; otherwise print `"Warning: overdrawn!"`
8. Use the **spread operator** to add `{ label: "coffee", amount: -80, type: "withdrawal" }` into a new array `fullStatement`. Print the new number of transactions.

**Expected Output:**

```
SALARY: 5000 birr (IN)
RENT: -2000 birr (OUT)
GROCERIES: -750 birr (OUT)
FREELANCE GIG: 1200 birr (IN)
INTERNET BILL: -450 birr (OUT)
Deposits: 2
Final balance: 3000 birr
Account is healthy.
Transactions after adding coffee: 6
```

---

# Part 2 — Slightly Harder Set (Questions 11–20)

These 10 questions are **a small step up** from the first set. They still use the core concepts above, but each one adds a few **new, easy-to-learn** JavaScript tools. Same rules: plain JavaScript only, run with `node yourfile.js`, and your `console.log()` output must match the **Expected Output** exactly.

**New concepts introduced in this set (all beginner-friendly):**

| #  | Concept                                                        |
|----|---------------------------------------------------------------|
| 16 | Array `.find()` — get the first matching element              |
| 17 | Array `.some()` and `.every()` — true/false checks over an array |
| 18 | Array `.forEach()` with an index                              |
| 19 | Ternary operator (`cond ? a : b`) — a short `if/else`         |
| 20 | `Object.keys()`, `Object.values()`, `Object.entries()`        |
| 21 | String `.split()` and `.join()`                               |
| 22 | `Math.max`, `Math.min`, `Math.round` (with spread: `Math.max(...arr)`) |
| 23 | Optional chaining `?.` and nullish coalescing `??`            |

---

## Question 11 — Employee Salary Summary (Person 1)

**Scenario:** You are printing a staff pay summary.

**Step-by-step requirements:**

1. Create a `const` array `employees`. Each is an **object** with `name` (string), `salary` (number), and `dept` (string). Add exactly these 5:
   - `"Abel"`, `8000`, `"eng"`
   - `"Sara"`, `12000`, `"sales"`
   - `"Kal"`, `9500`, `"eng"`
   - `"Dawit"`, `7000`, `"sales"`
   - `"Marta"`, `15000`, `"eng"`
2. Write a **regular function** `tier(salary)` that uses `if / else` to return `"senior"` if salary is `>= 12000`, `"mid"` if `>= 9000`, else `"junior"`.
3. Write an **arrow function** `format` that uses **object destructuring** to pull out `name`, `salary`, and `dept`, and returns a **template literal** like `` `ABEL (eng) — 8000 birr — junior` `` (name `.toUpperCase()`). Use `.map()` and print each with a **`for...of` loop**.
4. Use `.find()` to get the first employee earning **more than** `10000` and print `` `First high earner: Sara` ``.
5. Use `.some()` to check if anyone earns under `8000`, and `.every()` to check if everyone earns over `5000`. Print both booleans.
6. Use `.reduce()` to total all salaries, then store the average in a `let` variable with `Math.round(total / count)` and print it.
7. Use `Math.max(...)` and `Math.min(...)` with a spread of all salaries to print `` `Highest: 15000, Lowest: 7000` ``.

**Expected Output:**

```
ABEL (eng) — 8000 birr — junior
SARA (sales) — 12000 birr — senior
KAL (eng) — 9500 birr — mid
DAWIT (sales) — 7000 birr — junior
MARTA (eng) — 15000 birr — senior
First high earner: Sara
Anyone under 8000: true
Everyone over 5000: true
Average salary: 10300 birr
Highest: 15000, Lowest: 7000
```

---

## Question 12 — Quiz Score Analyzer (Person 2)

**Scenario:** You are grading a short quiz.

**Step-by-step requirements:**

1. Create a `const` array `students`. Each is an **object** with `name` (string), `correct` (number), and `total` (number). Add exactly these 3:
   - `"abel"`, correct `5`, total `5`
   - `"sara"`, correct `3`, total `5`
   - `"kal"`, correct `4`, total `5`
2. Write a **regular function** `grade(correct, total)` that computes the percentage with `Math.round((correct / total) * 100)` and uses a **ternary** to return `"PASS"` if the percentage is `>= 80`, else `"FAIL"`.
3. Write an **arrow function** `format` using **object destructuring** that returns `` `ABEL: 5/5 → PASS` `` (name `.toUpperCase()`). Use `.map()` and print each with a **`for...of` loop**.
4. Use `.filter()` to count how many passed and print `` `Passed: 2 of 3` ``.
5. Use `.reduce()` to find the student with the most correct answers and print `` `Best: ABEL with 5` `` (name `.toUpperCase()`).
6. Use `.every()` to confirm everyone scored at least 1 (`correct > 0`) and print the boolean.

**Expected Output:**

```
ABEL: 5/5 → PASS
SARA: 3/5 → FAIL
KAL: 4/5 → PASS
Passed: 2 of 3
Best: ABEL with 5
Everyone scored at least 1: true
```

---

## Question 13 — Recipe Ingredient List (Person 3)

**Scenario:** You are tidying up recipe ingredient lists.

**Step-by-step requirements:**

1. Create a `const` array `recipes`. Each is an **object** with `name` (string) and `ingredients` (a comma-separated **string**, e.g. `"flour,milk,egg"`). Add exactly these 3:
   - `"pancakes"`, `"flour,milk,egg"`
   - `"omelette"`, `"egg,cheese,milk"`
   - `"toast"`, `"bread,butter"`
2. Write an **arrow function** `format` using **object destructuring** that turns the ingredients into a clean list with `.split(",")` then `.join(", ")`, returning `` `PANCAKES: flour, milk, egg` `` (name `.toUpperCase()`). Use `.map()` and print each with a **`for...of` loop**.
3. Use `.reduce()` to total the number of ingredients across all recipes (`.split(",").length` for each) and print `` `Total ingredients used: 8` ``.
4. Use `.filter()` with `.includes("egg")` to count recipes that use egg and print `` `Recipes with egg: 2` ``.
5. Use `.reduce()` to find the recipe with the most ingredients and print `` `Most ingredients: pancakes (3)` ``.

**Expected Output:**

```
PANCAKES: flour, milk, egg
OMELETTE: egg, cheese, milk
TOAST: bread, butter
Total ingredients used: 8
Recipes with egg: 2
Most ingredients: pancakes (3)
```

---

## Question 14 — Gym Class Board (Person 4)

**Scenario:** You are printing a gym timetable with seat availability.

**Step-by-step requirements:**

1. Create a `const` array `classes`. Each is an **object** with `name` (string), `hour` (0–23), `capacity` (number), and `booked` (number). Add exactly these 4:
   - `"yoga"`, hour `9`, capacity `20`, booked `18`
   - `"spin"`, hour `18`, capacity `15`, booked `15`
   - `"pilates"`, hour `12`, capacity `12`, booked `5`
   - `"boxing"`, hour `7`, capacity `10`, booked `9`
2. Write a **regular function** `slot(hour)` that uses `if / else` to return `"morning"` if `hour < 12`, `"afternoon"` if `hour < 17`, else `"evening"`.
3. Write an **arrow function** `seatsLeft` that uses **object destructuring** to return `capacity - booked`.
4. Write an **arrow function** `format(cls)` that uses a **ternary** on the seats left: if `0` show `"FULL"`, otherwise `` `${left} seats` ``. Return `` `YOGA @ 9:00 (morning) — 2 seats` `` (name `.toUpperCase()`). Use `.map()` and print each with a **`for...of` loop**.
5. Use `.filter()` to count classes with space left (`seatsLeft > 0`) and print `` `Classes with space: 3` ``.
6. Use `.some()` to check if any class is full (`seatsLeft === 0`), and `.every()` to check if every class has 5+ booked. Print both booleans.
7. Use `.reduce()` to print total bookings across all classes.
8. Use `.find()` to get the first full class, then print its name using **optional chaining** and **nullish coalescing**: `` `First full class: ${firstFull?.name ?? "none"}` ``.

**Expected Output:**

```
YOGA @ 9:00 (morning) — 2 seats
SPIN @ 18:00 (evening) — FULL
PILATES @ 12:00 (afternoon) — 7 seats
BOXING @ 7:00 (morning) — 1 seats
Classes with space: 3
Any full classes: true
Every class has 5+ booked: true
Total bookings: 47
First full class: spin
```

---

## Question 15 — Price List Summary (Person 5)

**Scenario:** You are summarizing a shop's price list, stored as a single **object** (not an array).

**Step-by-step requirements:**

1. Create a `const` **object** `prices` where each key is a product name and each value is its price:
   - `laptop: 45000`, `mouse: 800`, `shirt: 600`, `novel: 350`, `jeans: 1200`
2. Use `Object.entries(prices)` with a **`for...of` loop** and **array destructuring** (`const [item, price] of ...`) to print each line as `` `LAPTOP: 45000 birr` `` (item `.toUpperCase()`).
3. Use `Object.keys(prices)` to print `` `Products: 5` `` with `.length`.
4. Use `Object.values(prices)` and `.reduce()` to print the total value of all products.
5. Use `Math.max(...)` and `Math.min(...)` on the values to print `` `Most expensive: 45000 birr, cheapest: 350 birr` ``.
6. Use `.filter()` on the values to count how many cost under `1000` birr and print `` `Under 1000 birr: 3` ``.

**Expected Output:**

```
LAPTOP: 45000 birr
MOUSE: 800 birr
SHIRT: 600 birr
NOVEL: 350 birr
JEANS: 1200 birr
Products: 5
Total value: 47950 birr
Most expensive: 45000 birr, cheapest: 350 birr
Under 1000 birr: 3
```

---

## Question 16 — Country Population List (Person 6)

**Scenario:** You are printing a numbered list of countries.

**Step-by-step requirements:**

1. Create a `const` array `countries`. Each is an **object** with `name` (string), `millions` (number), and `continent` (string). Add exactly these 5:
   - `"ethiopia"`, `126`, `"africa"`
   - `"kenya"`, `54`, `"africa"`
   - `"japan"`, `125`, `"asia"`
   - `"france"`, `68`, `"europe"`
   - `"egypt"`, `111`, `"africa"`
2. Write an **arrow function** `format(country, position)` using **object destructuring** that returns `` `1. ETHIOPIA — 126M (africa)` `` (name `.toUpperCase()`).
3. Use **`.forEach()` with its index** to print each country, passing `i + 1` as the position.
4. Use `Math.max(...)` and `Math.min(...)` on the populations to print `` `Biggest: 126M, Smallest: 54M` ``.
5. Use `.filter()` to get African countries, `.reduce()` to total their population, and print `` `African countries: 3, total 291M` ``.
6. Use `.some()` to check if any country is in Asia and print the boolean.
7. Use `.reduce()` + `Math.round()` to print the average population as `` `Average population: 97M` ``.

**Expected Output:**

```
1. ETHIOPIA — 126M (africa)
2. KENYA — 54M (africa)
3. JAPAN — 125M (asia)
4. FRANCE — 68M (europe)
5. EGYPT — 111M (africa)
Biggest: 126M, Smallest: 54M
African countries: 3, total 291M
Includes an Asian country: true
Average population: 97M
```

---

## Question 17 — Game Leaderboard (Person 7)

**Scenario:** You are printing player stats with a kill/death ratio.

**Step-by-step requirements:**

1. Create a `const` array `matches`. Each is an **object** with `player` (string), `kills` (number), and `deaths` (number). Add exactly these 4:
   - `"abel"`, kills `12`, deaths `4`
   - `"sara"`, kills `20`, deaths `5`
   - `"kal"`, kills `8`, deaths `8`
   - `"dawit"`, kills `15`, deaths `3`
2. Write a **regular function** `ratio(kills, deaths)` that uses a **ternary** to return `kills` when `deaths === 0`, otherwise `kills / deaths` rounded to 2 decimals with `Math.round((kills / deaths) * 100) / 100`.
3. Write a **regular function** `tierOf(kd)` that uses `if / else` to return `"S"` if `kd >= 4`, `"A"` if `kd >= 2`, else `"B"`.
4. Write an **arrow function** `format` using **object destructuring** that returns `` `ABEL — K/D 3 — Tier A` `` (player `.toUpperCase()`).
5. Use **`.forEach()` with its index** to print `` `1. ABEL — K/D 3 — Tier A` `` (prefix with `i + 1`).
6. Use `.reduce()` to find the player with the highest K/D and print `` `Champion: DAWIT` `` (`.toUpperCase()`).
7. Use `.filter()` to count S-tier players and print `` `S-tier players: 2` ``.
8. Use `.reduce()` to total kills and print it.
9. Use `.some()` to check if anyone had `3` or fewer deaths and print the boolean.

**Expected Output:**

```
1. ABEL — K/D 3 — Tier A
2. SARA — K/D 4 — Tier S
3. KAL — K/D 1 — Tier B
4. DAWIT — K/D 5 — Tier S
Champion: DAWIT
S-tier players: 2
Total kills: 55
Someone had 3 or fewer deaths: true
```

---

## Question 18 — Expense Tracker (Person 8)

**Scenario:** You are summarizing personal spending.

**Step-by-step requirements:**

1. Create a `const` array `expenses`. Each is an **object** with `note` (string), `amount` (number), and `tag` (string). Add exactly these 5:
   - `"lunch"`, `150`, `"food"`
   - `"taxi"`, `90`, `"transport"`
   - `"dinner"`, `220`, `"food"`
   - `"bus"`, `30`, `"transport"`
   - `"movie"`, `120`, `"fun"`
2. Write a **regular function** `level(amount)` that uses `if / else` to return `"big"` if `>= 200`, `"medium"` if `>= 100`, else `"small"`.
3. Write an **arrow function** `format` with **object destructuring** returning `` `LUNCH — 150 birr [food] (medium)` `` (note `.toUpperCase()`). Use `.map()` and print each with a **`for...of` loop**.
4. Use `.reduce()` to print the grand total spent.
5. Use `.filter()` for `"food"` expenses and `.reduce()` to print `` `Food spending: 370 birr` ``.
6. Use `.reduce()` to find the single biggest expense and print `` `Biggest expense: dinner (220 birr)` ``.
7. Use `.some()` to check if any single expense is over `200` and print the boolean.
8. Use `.filter()` to count `"big"` expenses and print `` `Big expenses: 1` ``.

**Expected Output:**

```
LUNCH — 150 birr [food] (medium)
TAXI — 90 birr [transport] (small)
DINNER — 220 birr [food] (big)
BUS — 30 birr [transport] (small)
MOVIE — 120 birr [fun] (medium)
Total spent: 610 birr
Food spending: 370 birr
Biggest expense: dinner (220 birr)
Any single expense over 200: true
Big expenses: 1
```

---

## Question 19 — Sentence Word Tools (Person 9)

**Scenario:** You are analyzing a single sentence with string tools.

**Step-by-step requirements:**

1. Create a `const` string `sentence = "the quick brown fox jumps"`.
2. Use `.split(" ")` to make an array `words`. Print `` `Word count: 5` `` with `.length`.
3. Use `.map()` to uppercase every word, then print each one on its own line with a **`for...of` loop**.
4. Use `.filter()` to count words with 5 or more letters (`.length >= 5`) and print `` `Long words (5+ letters): 3` ``.
5. Use `.join("-")` to print a slug: `` `Slug: the-quick-brown-fox-jumps` ``.
6. Use `.some()` to check if the sentence contains the exact word `"fox"` and print the boolean.
7. Use `.reduce()` to find the longest word and print `` `Longest word: QUICK (5 letters)` `` (`.toUpperCase()`).
8. Use `.reduce()` to total the number of letters across all words and print `` `Total letters: 21` ``.

**Expected Output:**

```
Word count: 5
THE
QUICK
BROWN
FOX
JUMPS
Long words (5+ letters): 3
Slug: the-quick-brown-fox-jumps
Contains "fox": true
Longest word: QUICK (5 letters)
Total letters: 21
```

---

## Question 20 — Product Inventory (Person 10)

**Scenario:** You are flagging low-stock products in a small shop.

**Step-by-step requirements:**

1. Create a `const` array `inventory`. Each is an **object** with `sku` (string), `name` (string), `stock` (number), and `restock` (number — the reorder threshold). Add exactly these 4:
   - `"A1"`, `"pen"`, stock `40`, restock `10`
   - `"B2"`, `"notebook"`, stock `5`, restock `10`
   - `"C3"`, `"eraser"`, stock `0`, restock `20`
   - `"D4"`, `"ruler"`, stock `25`, restock `10`
2. Write a **regular function** `status(stock, restock)`: use `if / else` to return `"OUT"` when `stock === 0`, otherwise a **ternary** returning `"LOW"` if `stock <= restock` else `"OK"`.
3. Write an **arrow function** `format` with **object destructuring** returning `` `PEN: 40 in stock — OK` `` (name `.toUpperCase()`). Use `.map()` and print each with a **`for...of` loop**.
4. Use `.filter()` for items where `stock <= restock`, `.map()` to their names, and print `` `Items to restock: notebook, eraser` `` with `.join(", ")`.
5. Use `.reduce()` to print total units in stock.
6. Use `.find()` to get the first out-of-stock item, then print its name using **optional chaining** and **nullish coalescing**: `` `First out of stock: ${outOfStock?.name ?? "none"}` ``.
7. Use `.every()` to check if everything has `stock > 0` and print the boolean.
8. Use `Math.min(...)` on all stock levels to print `` `Lowest stock level: 0` ``.

**Expected Output:**

```
PEN: 40 in stock — OK
NOTEBOOK: 5 in stock — LOW
ERASER: 0 in stock — OUT
RULER: 25 in stock — OK
Items to restock: notebook, eraser
Total units: 70
First out of stock: eraser
Everything in stock: false
Lowest stock level: 0
```

---

## Grading / Self-Check (same for everyone)

Your solution is complete when:

1. ✅ Running `node yourfile.js` prints output **exactly matching** the Expected Output for your question.
2. ✅ You used **all 15 concepts** from the table at the top (check them off one by one).
3. ✅ You did **not** mutate the original array — the spread step must create a *new* array.
4. ✅ No libraries, no HTML — plain JavaScript only.
