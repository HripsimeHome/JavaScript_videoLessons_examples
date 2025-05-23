 
'use strict';
 
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }   
  }
}
rememberMyFilms();

function detectPerosnalLevel () {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if  (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
  console.log("Произошла ошибка");
  }  
}
detectPerosnalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

// Прописываем i-1, чтобы начать с единицы, а не снуля. Если не написать i-1, в консоли отобраизтся в нулевом индексе как - empty

function writeYourGeners() {
  for (let i = 1; i <=3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i-1] = genre;
  }
}
writeYourGeners();

// Можно написать без новой переменной genre, так будет и быстрее работать

function writeYourGeners2() {
  for (let i = 1; i <=3; i++) { 
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGeners2();

console.log(personalMovieDB);