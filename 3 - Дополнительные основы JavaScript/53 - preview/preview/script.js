"use strict";

// Nulish оператор обозначается как ?? - Оператор нулевого слияния, реагирует не на все false-ы, а только на null  и undefined.
// Оператор нулевого слияния (??) возвращает первое значение, которое не равно null и undefined.


const box = document.querySelector(".box");

const newHeight = 100; //Еси определим здесь 0, то увидим 200, так как 0 - это false, и опаератор || натыкается на правде, поэтому будет 200
const newWidth = 400; //Еси определим здесь 0, то увидим 200, так как 0 - это false, и опаератор || натыкается на правде, поэтому будет 200


function changeParams(elem, h, w) {
  elem.style.height = `${h}px`;
  elem.style.width = `${w}px`;
}
changeParams(box, newHeight, newWidth);

const box2 = document.querySelector(".box");
const newHeight2 = 0;
const newWidth2 = 0;
function changeParams1(elem, h, w) {
  elem.style.height2 = `${h || 200}px`; //200
  elem.style.width2 = `${w || 200}px`; // 200
}
changeParams1(box2, newHeight2, newWidth2);




const box3 = document.querySelector(".box");
const newHeight3 = 0;
const newWidth3 = 0;
function changeParams3(elem, h, w) {
  elem.style.height3 = `${h ?? 200}px`; // 0 - Вернет первое правдивое значени. 0 для Nullish - это правда
  elem.style.width3 = `${w ?? 200}px`; // 0
  elem.innerHTML = (h ?? 200 ) * (w ?? 200); // Тоже самое, что и на верхней строчке, только добавляется и умножение. Поприоритету сперва скобки, затем умножение
}
changeParams3(box3, newHeight3, newWidth3);



//   || считает 0, '', false — ложными. Возвращает первое "истинное" значение
//   ?? считает ложными только null и undefined


// Если в первом значении буедт null или undefined, то будет возвращен второй результат.
let userName;

console.log(userName ?? "User")

let userName2  = null;
console.log(userName2 ?? "User"); // User// Так как userName2 - это null

let userName3  = 0;
console.log(userName3 ?? "User"); // User/ Так как userName3 - это 0. Для NUlissh 0 - это не false, а правдивое значение, поэтому вернет шервое правдивое значение

let userName4  = NaN;
console.log(userName4 ?? "User"); // NaN



//Хотя бы один из них, чтобы существовал

let userName5 // undefined
let userKey5;  // undefined

console.log(userName5 ?? userKey5 ?? 'User');


// && и ?? не могут быть смешанны в одном выражении 
//console.log(userName5 && userKey5 ?? 'User'); //будет ошибка




// From ChatGPT

let username = null;
let defaultName = "Guest";

let nameToShow = username ?? defaultName;

console.log(nameToShow); // "Guest"

let a = 0;
let b = a || "Default";    // "Default"
let c = a ?? "Default"; // 0 . // Возвращает первое значение, которое НЕ null и НЕ undefined. 0 — это НЕ null и НЕ undefined, поэтому он сохраняется



// Пользователь может: 
// 1. что-то ввести и нажать OK → вернётся строка (например, "123")

// 2. нажать "Отмена" → вернётся null

// ?? проверяет: если результат null или undefined, тогда возвращается "ничего не введено"

let userInput = prompt("Введите число") || "ничего не введено";