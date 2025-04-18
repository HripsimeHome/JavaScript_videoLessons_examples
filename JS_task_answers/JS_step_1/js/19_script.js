
// 2 - Основы JavaScript, VIdeo 19 - Практика ч1 Начинаем создавать приложение.mp4

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить let number = 5;
    const leftBorder = 10;
     
    number = 10;
     console.log(number)
    
    const obj = {
      a: 50
    };
    
    obj.a = 420;
    console.log(obj)
    
    const result = confirm("Are you here?")
    console.log(result);
    
    console.log(typeof "12");
     
    const category = "toys"
    console.log(`https://someurl.com/${category}/5`);
    
    const user = "Ivan";
    alert(`Hello, ${user}`)
    (логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {}, 
  actors: {},
  genres: [], 
  privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

