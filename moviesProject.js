"use strict";

let NumberOfFilms;

function start() {
  NumberOfFilms = +prompt("How many movies did you watch?", "");

  while (
    NumberOfFilms == "" ||
    NumberOfFilms == null ||
    NumberOfFilms == isNaN(NumberOfFilms)
  )
    NumberOfFilms = +prompt("How many movies did you watch?", "");
}
 
const personalMovieDB = {
  count: NumberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt("One of watched movies?");
let b = prompt("How much you would rate it?");
let c = prompt("One of watched movies?");
let d = prompt("How much you would rate it?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
  a = prompt("One of watched movies?");
  b = prompt("How much you would rate it?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }

  if (personalMovieDB.count < 10) {
    console.log("Why that little?");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Classic");
  } else if (personalMovieDB.count >= 30) {
    console.log("wow");
  } else {
    console.log("error");
  }
}

console.log(personalMovieDB);
