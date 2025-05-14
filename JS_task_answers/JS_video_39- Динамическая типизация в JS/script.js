 'use strict';
 
// To string -  примеры с превращением с строку

// 1) Старый, не удобный метод

console.log(typeof(String(null)));  // Получаем String
console.log(String(null)); // Получаем null - Юто именно строчка
console.log(String(4)); //Строка

// 2) КОнкатенация, Pri\\При сложении со строкой получается строка

console.log(typeof(5 + "")); // String
console.log(typeof(null + ""));
console.log(typeof(undefined + ""));


const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontsize = 26 + "px";


// To Number - примеры с превращением в число

//Так еще меньше испольуэт чем с оператором String

console.log(typeof(Number("4"))); // Получаем число

// 2) Более удобный метод- унарный плюс

console.log(typeof(+ "5")); // number

// 3) - Не часто испоьзуется

console.log(typeof(parseInt("15px", 10)));

//let answ = +prompt("Hello", "");



// To billean

// Все что будет превращаться в неправду (в fasle) -  0, "", null, undefined, NaN

// Пустые строки, пустые массивы, пустее объекты ...  будет true

// 1)  Первый способ

let switcher = null;
// let switcher = true; Если написать true, то условие выполнится, в консоли увидим  տեկստ Working ...

if (switcher) {
    console.log("Working ...");
}

// В этом случае выполнится , потому что 1  в логическом контексте это правда 9true0
switcher = 1;
if (switcher) {
    console.log("Working ...");
}

// 2)  Втпрой способ

console.log(typeof(Boolean("4")));

// 3) Третий способ - редко испольауется

console.log(typeof(!! "4444"));