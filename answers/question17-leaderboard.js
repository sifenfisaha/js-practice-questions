// Question 17 — Game Leaderboard

// An ARRAY of OBJECTS: each match record has a player, their kills,
// and their deaths.
const matches = [
  { player: "abel", kills: 12, deaths: 4 },
  { player: "sara", kills: 20, deaths: 5 },
  { player: "kal", kills: 8, deaths: 8 },
  { player: "dawit", kills: 15, deaths: 3 },
];

// Regular function. The TERNARY guards against dividing by zero:
// if deaths is 0, just return kills; otherwise divide.
// Math.round(x * 100) / 100 rounds to 2 decimal places.
function ratio(kills, deaths) {
  return deaths === 0 ? kills : Math.round((kills / deaths) * 100) / 100;
}

// Regular function with three levels of if / else to pick a tier.
function tierOf(kd) {
  if (kd >= 4) return "S";
  else if (kd >= 2) return "A";
  else return "B";
}

// Arrow function with a BODY, so it uses its own `return`.
const format = ({ player, kills, deaths }) => {
  const kd = ratio(kills, deaths);
  return `${player.toUpperCase()} — K/D ${kd} — Tier ${tierOf(kd)}`;
};

// .forEach() with its index `i`; `i + 1` numbers the rows 1, 2, 3, ...
matches.forEach((m, i) => console.log(`${i + 1}. ${format(m)}`));

// .reduce() (no starting value) keeps whichever player has the higher
// K/D, so it ends up holding the champion.
const champ = matches.reduce((a, b) =>
  ratio(b.kills, b.deaths) > ratio(a.kills, a.deaths) ? b : a
);
console.log(`Champion: ${champ.player.toUpperCase()}`);

// .filter() keeps players whose tier is "S".
const sTier = matches.filter((m) => tierOf(ratio(m.kills, m.deaths)) === "S");
console.log(`S-tier players: ${sTier.length}`);

// .reduce() totals all kills.
const totalKills = matches.reduce((sum, m) => sum + m.kills, 0);
console.log(`Total kills: ${totalKills}`);

// .some() -> true if anyone had 3 or fewer deaths.
const clutch = matches.some((m) => m.deaths <= 3);
console.log(`Someone had 3 or fewer deaths: ${clutch}`);
