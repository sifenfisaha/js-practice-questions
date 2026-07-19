// Question 7 — Playlist Summary

// An ARRAY of OBJECTS: each song has a title, an artist, and a
// length in seconds.
const playlist = [
  { title: "tizita", artist: "Mulatu", seconds: 240 },
  { title: "blinding lights", artist: "The Weeknd", seconds: 200 },
  { title: "perfect", artist: "Ed Sheeran", seconds: 263 },
  { title: "believer", artist: "Imagine Dragons", seconds: 204 },
];

// Regular function: label a song "long" or "short" using if / else.
function lengthLabel(seconds) {
  if (seconds >= 240) {
    return "long";
  } else {
    return "short";
  }
}

// Arrow function + OBJECT DESTRUCTURING ({ title, artist, seconds }).
const formatSong = ({ title, artist, seconds }) =>
  `${title.toUpperCase()} by ${artist} (${seconds}s, ${lengthLabel(seconds)})`;

// .map() formats every song; for...of prints each line.
const lines = playlist.map(formatSong);
for (const line of lines) {
  console.log(line);
}

// .filter() keeps songs under 240 seconds.
const shortSongs = playlist.filter((song) => song.seconds < 240);
console.log(`Short songs: ${shortSongs.length}`);

// .reduce() totals all seconds; Math.round() rounds to a whole number
// of minutes (total / 60).
const totalSeconds = playlist.reduce((sum, song) => sum + song.seconds, 0);
let totalMinutes = Math.round(totalSeconds / 60);
console.log(`Total playlist length: ${totalMinutes} minutes`);

// SPREAD (...) makes a new array with "halo" added.
const newPlaylist = [...playlist, { title: "halo", artist: "Beyonce", seconds: 261 }];
console.log(`Songs after adding Halo: ${newPlaylist.length}`);
