/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector(".promo__interactive-list");
      

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против ..."
    ]
};

// 1. Задача
// Метод со стрелочной функцией - предпочтительнее использояать стрелочную функцию
adv.forEach(item => {
    item.remove();
});

// Метод с функцией
adv.forEach(function(item) {
    item.remove();
});


// 2. Задача
genre.textContent = "Драма";


// 3. Задача
 poster.style.backgroundImage = "url('img/bg.jpg')";
 

 // 4 .Задача
 movieList.innerHTML = "";

 movieDB.movies.sort();

 movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
 });