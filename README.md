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

## Grading / Self-Check (same for everyone)

Your solution is complete when:

1. ✅ Running `node yourfile.js` prints output **exactly matching** the Expected Output for your question.
2. ✅ You used **all 15 concepts** from the table at the top (check them off one by one).
3. ✅ You did **not** mutate the original array — the spread step must create a *new* array.
4. ✅ No libraries, no HTML — plain JavaScript only.
