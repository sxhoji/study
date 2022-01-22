'use strict';

let NumberOfFilms;

function start() {
  NumberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

  while (
    NumberOfFilms == '' ||
    NumberOfFilms == null ||
    NumberOfFilms == isNaN(NumberOfFilms)
  ) {
    NumberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
  }
}

start();

const personalMovieDB = {
  count: NumberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один з переглянутих фільмів?', ''),
      b = prompt('На сквільки оціните його?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Переглянуто доволі мало фільмів');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний глядач');
  } else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
  } else {
    console.log('Сталася помилка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш улюблений жанр під номером ${i}`
    );
  }
}
writeYourGenres();
