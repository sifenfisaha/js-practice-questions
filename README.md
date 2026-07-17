# JavaScript Practice Questions — 10 Mini Projects (One Per Person)

**How to use this file:**
- There are **10 questions**, one for each person. Everyone gets a different theme, but every question has the **same difficulty level** and uses the **same 15 core JavaScript concepts**.
- Everything can be built with **plain JavaScript only** — no HTML, no libraries, no frameworks.
- Run your file with Node.js: `node yourfile.js` (or paste it into the browser console).
- Your program must print output with `console.log()` that matches the **Expected Output** shown under each question.

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

# Part 2 — Harder Set (Questions 11–20)

These 10 questions are **a step up** from the first set. They still build on the 15 core concepts above, but each one adds **new, slightly harder JavaScript**. Same rules: plain JavaScript only, run with `node yourfile.js`, and your `console.log()` output must match the **Expected Output** exactly.

**New concepts introduced in this set:**

| #  | Concept                                                        |
|----|---------------------------------------------------------------|
| 16 | Array `.sort()` with a compare function (`(a, b) => a - b`)    |
| 17 | Array `.find()` — get the first matching element              |
| 18 | Array `.some()` and `.every()` — boolean checks over an array |
| 19 | Array `.forEach()` with an index                              |
| 20 | Ternary operator (`cond ? a : b`), including chained ternaries |
| 21 | `Object.keys()`, `Object.values()`, `Object.entries()`        |
| 22 | Nested data (arrays inside objects, objects inside arrays)    |
| 23 | `Set` — collecting unique values                              |
| 24 | `Map` — key/value counting and lookups                        |
| 25 | String `.split()` and `.join()`                               |
| 26 | Building an object/group with `.reduce()` (grouping)          |
| 27 | `Math.max`, `Math.min`, `Math.round` (with spread: `Math.max(...arr)`) |
| 28 | Optional chaining `?.` and nullish coalescing `??`            |

---

## Question 11 — Employee Salary Sorter (Person 1)

**Scenario:** You are ranking employees by salary and summarizing pay by department.

**Step-by-step requirements:**

1. Create a `const` array `employees`. Each is an **object** with `name` (string), `salary` (number), and `dept` (string). Add exactly these 5:
   - `"Abel"`, `8000`, `"eng"`
   - `"Sara"`, `12000`, `"sales"`
   - `"Kal"`, `9500`, `"eng"`
   - `"Dawit"`, `7000`, `"sales"`
   - `"Marta"`, `15000`, `"eng"`
2. Write a **regular function** `tier(salary)` that uses a **chained ternary** to return `"senior"` if salary is `>= 12000`, `"mid"` if `>= 9000`, else `"junior"`.
3. Write an **arrow function** `format` that uses **object destructuring** to pull out `name`, `salary`, and `dept`, and returns a **template literal** like `` `MARTA (eng) — 15000 birr — senior` `` (name `.toUpperCase()`).
4. Make a **sorted copy** with the **spread operator** and `.sort((a, b) => b.salary - a.salary)` (highest first — do **not** mutate the original). `.map()` it through `format` and print each line with a **`for...of` loop**.
5. Use `.find()` to get the first employee earning **more than** `10000` and print `` `Top earner: ${top.name}` ``.
6. Use `.some()` to check if anyone earns under `8000`, and `.every()` to check if everyone earns over `5000`. Print both booleans.
7. Use `.reduce()` to build an **object** `byDept` that totals salary per department. Loop it with `Object.entries()` and a **`for...of` loop**, printing `` `ENG total: 32500 birr` `` (dept `.toUpperCase()`).
8. Use `Math.max(...)` with a spread of all salaries to print the highest salary.

**Expected Output:**

```
MARTA (eng) — 15000 birr — senior
SARA (sales) — 12000 birr — senior
KAL (eng) — 9500 birr — mid
ABEL (eng) — 8000 birr — junior
DAWIT (sales) — 7000 birr — junior
Top earner: Marta
Anyone under 8000: true
Everyone over 5000: true
ENG total: 32500 birr
SALES total: 19000 birr
Highest salary: 15000 birr
```

---

## Question 12 — Quiz Score Analyzer (Person 2)

**Scenario:** You are grading a multiple-choice quiz by comparing each student's answers to a key.

**Step-by-step requirements:**

1. Create a `const` array `answers` (the answer key): `["A", "C", "B", "D", "A"]`.
2. Create a `const` array `students`. Each is an **object** with `name` (string) and `picks` (an **array** of answer strings — this is **nested data**). Add exactly these 3:
   - `"abel"`, picks `["A", "C", "B", "D", "A"]`
   - `"sara"`, picks `["A", "B", "B", "D", "C"]`
   - `"kal"`, picks `["A", "C", "A", "D", "A"]`
3. Write a **regular function** `grade(correct, total)` that computes the percentage with `Math.round((correct / total) * 100)` and uses a **ternary** to return `"PASS"` if the percentage is `>= 80`, else `"FAIL"`.
4. Write an **arrow function** `scoreOf(picks)` that uses `.reduce()` to count how many picks match `answers` at the same index (compare `pick === answers[i]`).
5. Use `.map()` with **object destructuring** to turn each student into `{ name, correct, verdict }`.
6. Loop the results with a **`for...of` loop** and print `` `ABEL: 5/5 → PASS` `` (name `.toUpperCase()`).
7. Use `.filter()` to count how many passed and print `` `Passed: 2 of 3` ``.
8. Use `.reduce()` to find the student with the most correct answers and print `` `Best score: ABEL with 5` `` (name `.toUpperCase()`).
9. Use `.every()` to confirm every student answered all questions (`picks.length === answers.length`) and print the boolean.

**Expected Output:**

```
ABEL: 5/5 → PASS
SARA: 3/5 → FAIL
KAL: 4/5 → PASS
Passed: 2 of 3
Best score: ABEL with 5
All answered every question: true
```

---

## Question 13 — Recipe Ingredient Combiner (Person 3)

**Scenario:** You are merging several recipes into one shopping list and finding shared ingredients.

**Step-by-step requirements:**

1. Create a `const` array `recipes`. Each is an **object** with `name` (string) and `ingredients` (an **array** of strings — **nested data**). Add exactly these 3:
   - `"pancakes"`, `["flour", "milk", "egg"]`
   - `"omelette"`, `["egg", "cheese", "milk"]`
   - `"toast"`, `["bread", "butter"]`
2. Write an **arrow function** `format` using **object destructuring** that returns `` `PANCAKES: flour, milk, egg` `` — use `.join(", ")` on the ingredients and `.toUpperCase()` on the name. `.map()` and print each with a **`for...of` loop**.
3. Use `.reduce()` with the **spread operator** to flatten all ingredient arrays into one array `allIngredients`.
4. Build a **`Set`** from `allIngredients` and spread it back into an array `unique`. Print `` `Unique ingredients: 6` `` using `.length`.
5. Print a sorted shopping list: `` `Shopping list: bread, butter, ...` `` using `.sort()` then `.join(", ")`.
6. Build a **`Map`** counting how many times each ingredient appears across recipes. Then get its `.entries()`, `.filter()` for counts `> 1`, and print each shared one as `` `milk used in 2 recipes` ``.
7. Use `.filter()` with `.includes("egg")` to count recipes that use egg and print `` `Recipes with egg: 2` ``.

**Expected Output:**

```
PANCAKES: flour, milk, egg
OMELETTE: egg, cheese, milk
TOAST: bread, butter
Unique ingredients: 6
Shopping list: bread, butter, cheese, egg, flour, milk
milk used in 2 recipes
egg used in 2 recipes
Recipes with egg: 2
```

---

## Question 14 — Gym Class Scheduler (Person 4)

**Scenario:** You are printing a gym timetable sorted by time and grouped by part of day.

**Step-by-step requirements:**

1. Create a `const` array `classes`. Each is an **object** with `name` (string), `hour` (0–23), `capacity` (number), and `booked` (number). Add exactly these 4:
   - `"yoga"`, hour `9`, capacity `20`, booked `18`
   - `"spin"`, hour `18`, capacity `15`, booked `15`
   - `"pilates"`, hour `12`, capacity `12`, booked `5`
   - `"boxing"`, hour `7`, capacity `10`, booked `9`
2. Write a **regular function** `slot(hour)` that uses a **chained ternary**: `"morning"` if `hour < 12`, `"afternoon"` if `hour < 17`, else `"evening"`.
3. Write an **arrow function** `seatsLeft` that uses **object destructuring** to return `capacity - booked`.
4. Write an **arrow function** `format(cls)` that uses a **ternary** on the seats left: if `0` show `"FULL"`, otherwise `` `${left} seats` ``. Return `` `YOGA @ 9:00 (morning) — 2 seats` `` (name `.toUpperCase()`).
5. Make a **sorted copy** (spread + `.sort((a, b) => a.hour - b.hour)`, earliest first), `.map()` through `format`, and print each with a **`for...of` loop**.
6. Use `.filter()` to count classes with space left (`seatsLeft > 0`) and print `` `Classes with space: 3` ``.
7. Use `.some()` to check if any class is full (`seatsLeft === 0`) and print the boolean.
8. Use `.reduce()` to print total bookings across all classes.
9. Use `.reduce()` to build an **object** grouping class **names** by `slot(hour)`, then print each group with `Object.entries()`, a **`for...of` loop**, and `.join(", ")` — like `` `morning: yoga, boxing` ``.

**Expected Output:**

```
BOXING @ 7:00 (morning) — 1 seats
YOGA @ 9:00 (morning) — 2 seats
PILATES @ 12:00 (afternoon) — 7 seats
SPIN @ 18:00 (evening) — FULL
Classes with space: 3
Any full classes: true
Total bookings: 47
morning: yoga, boxing
evening: spin
afternoon: pilates
```

---

## Question 15 — Online Order Grouping (Person 5)

**Scenario:** You are grouping shop orders by category and summarizing each group.

**Step-by-step requirements:**

1. Create a `const` array `orders`. Each is an **object** with `item` (string), `category` (string), and `price` (number). Add exactly these 5:
   - `"laptop"`, `"tech"`, `45000`
   - `"mouse"`, `"tech"`, `800`
   - `"shirt"`, `"clothing"`, `600`
   - `"novel"`, `"books"`, `350`
   - `"jeans"`, `"clothing"`, `1200`
2. Write an **arrow function** `format` with **object destructuring** returning `` `LAPTOP [tech] — 45000 birr` `` (item `.toUpperCase()`). `.map()` and print each with a **`for...of` loop**.
3. Use `.reduce()` to build an **object** `grouped` where each key is a category and the value is an **array** of the orders in it (**nested data**).
4. Loop `grouped` with `Object.entries()` and a **`for...of` loop**. For each category, use `.reduce()` on its items to total the price, and print `` `TECH: 2 items, 45800 birr` `` (category `.toUpperCase()`).
5. Use `Object.keys()` on `grouped`, `.sort()` it, and print `` `Categories: books, clothing, tech` `` with `.join(", ")`.
6. Use `.reduce()` to find the single most expensive order and print `` `Most expensive: laptop (45000 birr)` ``.
7. Use `.filter()` to count orders under `1000` birr and print `` `Under 1000 birr: 3` ``.

**Expected Output:**

```
LAPTOP [tech] — 45000 birr
MOUSE [tech] — 800 birr
SHIRT [clothing] — 600 birr
NOVEL [books] — 350 birr
JEANS [clothing] — 1200 birr
TECH: 2 items, 45800 birr
CLOTHING: 2 items, 1800 birr
BOOKS: 1 items, 350 birr
Categories: books, clothing, tech
Most expensive: laptop (45000 birr)
Under 1000 birr: 3
```

---

## Question 16 — Country Population Ranking (Person 6)

**Scenario:** You are building a ranked population table.

**Step-by-step requirements:**

1. Create a `const` array `countries`. Each is an **object** with `name` (string), `millions` (number), and `continent` (string). Add exactly these 5:
   - `"ethiopia"`, `126`, `"africa"`
   - `"kenya"`, `54`, `"africa"`
   - `"japan"`, `125`, `"asia"`
   - `"france"`, `68`, `"europe"`
   - `"egypt"`, `111`, `"africa"`
2. Write an **arrow function** `format(country, rank)` using **object destructuring** that returns `` `#1 ETHIOPIA — 126M (africa)` `` (name `.toUpperCase()`).
3. Make a **sorted copy** (spread + `.sort((a, b) => b.millions - a.millions)`, biggest first). Use **`.forEach()` with its index** to print each line, passing `i + 1` as the rank.
4. Read the first and last of the sorted array by index and print `` `Biggest: ETHIOPIA, Smallest: KENYA` `` (names `.toUpperCase()`).
5. Use `.filter()` to get African countries, `.reduce()` to total their population, and print `` `African countries: 3, total 291M` ``.
6. Use `.map()` + a **`Set`** to collect the distinct continents, spread to an array, `.sort()`, and print with `.join(", ")`.
7. Use `.reduce()` + `Math.round()` to print the average population as `` `Average population: 97M` ``.

**Expected Output:**

```
#1 ETHIOPIA — 126M (africa)
#2 JAPAN — 125M (asia)
#3 EGYPT — 111M (africa)
#4 FRANCE — 68M (europe)
#5 KENYA — 54M (africa)
Biggest: ETHIOPIA, Smallest: KENYA
African countries: 3, total 291M
Continents covered: africa, asia, europe
Average population: 97M
```

---

## Question 17 — Game Leaderboard (Person 7)

**Scenario:** You are ranking players by kill/death ratio.

**Step-by-step requirements:**

1. Create a `const` array `matches`. Each is an **object** with `player` (string), `kills` (number), and `deaths` (number). Add exactly these 4:
   - `"abel"`, kills `12`, deaths `4`
   - `"sara"`, kills `20`, deaths `5`
   - `"kal"`, kills `8`, deaths `8`
   - `"dawit"`, kills `15`, deaths `3`
2. Write a **regular function** `ratio(kills, deaths)` that returns `kills` when `deaths === 0` (ternary), otherwise `kills / deaths` rounded to 2 decimals with `Math.round(x * 100) / 100`.
3. Write an **arrow function** `rank(kd)` using a **chained ternary**: `"S"` if `kd >= 4`, `"A"` if `kd >= 2`, else `"B"`.
4. Use `.map()` with **object destructuring** to build `{ player, kd, tier }` for each match.
5. `.sort((a, b) => b.kd - a.kd)` the stats (highest K/D first), then use **`.forEach()` with its index** to print `` `1. DAWIT — K/D 5 — Tier S` `` (player `.toUpperCase()`).
6. Print the champion (first after sorting) as `` `Champion: DAWIT` `` (`.toUpperCase()`).
7. Use `.filter()` to count S-tier players and print `` `S-tier players: 2` ``.
8. Use `.reduce()` to total kills and print it.
9. Use `.some()` to check if anyone had `3` or fewer deaths and print the boolean.

**Expected Output:**

```
1. DAWIT — K/D 5 — Tier S
2. SARA — K/D 4 — Tier S
3. ABEL — K/D 3 — Tier A
4. KAL — K/D 1 — Tier B
Champion: DAWIT
S-tier players: 2
Total kills: 55
Someone had 3 or fewer deaths: true
```

---

## Question 18 — Expense Category Tracker (Person 8)

**Scenario:** You are summarizing personal spending by tag using a `Map`.

**Step-by-step requirements:**

1. Create a `const` array `expenses`. Each is an **object** with `note` (string), `amount` (number), and `tag` (string). Add exactly these 5:
   - `"lunch"`, `150`, `"food"`
   - `"taxi"`, `90`, `"transport"`
   - `"dinner"`, `220`, `"food"`
   - `"bus"`, `30`, `"transport"`
   - `"movie"`, `120`, `"fun"`
2. Write a **regular function** `level(amount)` using a **chained ternary**: `"big"` if `>= 200`, `"medium"` if `>= 100`, else `"small"`.
3. Write an **arrow function** `format` with **object destructuring** returning `` `LUNCH — 150 birr [food] (medium)` `` (note `.toUpperCase()`). `.map()` and print each with a **`for...of` loop**.
4. Build a **`Map`** `totals` that sums `amount` per `tag` (loop with **`for...of`** and destructuring).
5. Turn the map into an array with `[...totals.entries()]`, `.sort((a, b) => b[1] - a[1])` (biggest total first), and print each as `` `food: 370 birr` `` with a **`for...of` loop**.
6. Use `.reduce()` to print the grand total spent.
7. Read the first row of the sorted array with **array destructuring** (`const [topTag, topSum] = rows[0]`) and print `` `Biggest category: food (370 birr)` ``.
8. Use `.filter()` to count `"big"` expenses and print `` `Big expenses: 1` ``.

**Expected Output:**

```
LUNCH — 150 birr [food] (medium)
TAXI — 90 birr [transport] (small)
DINNER — 220 birr [food] (big)
BUS — 30 birr [transport] (small)
MOVIE — 120 birr [fun] (medium)
food: 370 birr
transport: 120 birr
fun: 120 birr
Total spent: 610 birr
Biggest category: food (370 birr)
Big expenses: 1
```

---

## Question 19 — Word Frequency Counter (Person 9)

**Scenario:** You are counting how often each word appears in a sentence.

**Step-by-step requirements:**

1. Create a `const` string `text = "the cat sat on the mat the cat ran"`.
2. Use `.split(" ")` to make an array `words`. Print `` `Total words: 9` `` with `.length`.
3. Use `.reduce()` to build an **object** `freq` mapping each word to its count.
4. Turn it into rows with `Object.entries()` and `.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))` — highest count first, ties broken alphabetically.
5. Print each row as `` `THE → 3` `` (word `.toUpperCase()`) with a **`for...of` loop**.
6. Use `Object.keys()` to print `` `Unique words: 6` ``.
7. Read the first row with **array destructuring** and print `` `Most common: the (3 times)` ``.
8. Use `.filter()` for counts `> 1`, `.map()` to just the words, and print `` `Repeated words: the, cat` `` with `.join(", ")`.

**Expected Output:**

```
Total words: 9
THE → 3
CAT → 2
MAT → 1
ON → 1
RAN → 1
SAT → 1
Unique words: 6
Most common: the (3 times)
Repeated words: the, cat
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
3. Write an **arrow function** `format` with **object destructuring** returning `` `PEN: 40 in stock — OK` `` (name `.toUpperCase()`). `.map()` and print each with a **`for...of` loop**.
4. Use `.filter()` for items where `stock <= restock`, `.map()` to their names, and print `` `Items to restock: notebook, eraser` `` with `.join(", ")`.
5. Use `.reduce()` to print total units in stock.
6. Use `.find()` to get the first out-of-stock item, then print its name using **optional chaining** and **nullish coalescing**: `` `First out of stock: ${outOfStock?.name ?? "none"}` ``.
7. Use `.every()` to check if everything has `stock > 0` and print the boolean.
8. Use `.reduce()` to find the item with the lowest stock and print `` `Lowest stock: eraser (0)` ``.

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
Lowest stock: eraser (0)
```

---

## Grading / Self-Check (same for everyone)

Your solution is complete when:

1. ✅ Running `node yourfile.js` prints output **exactly matching** the Expected Output for your question.
2. ✅ You used **all 15 concepts** from the table at the top (check them off one by one).
3. ✅ You did **not** mutate the original array — the spread step must create a *new* array.
4. ✅ No libraries, no HTML — plain JavaScript only.
