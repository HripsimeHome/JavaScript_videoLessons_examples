 
'use strict';
 
const str = "teSt";
const arr = [1,2,3];

console.log(str.length);
console.log(arr.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Поиск подстроки (ищет в тексте на соответствие)

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")) // Output 5 
console.log(fruit.indexOf("q")) // Output -1 (не найдено)

//slice
const logg = "Hello world"; 
console.log(logg.slice(6, 11));// 6 - начальный индекс, 11 - конечный индекс (не включается)
    
console.log(logg.slice(6));// 6 - начальный индекс, до конца строки
console.log(logg.slice(-5, -1)); // -5 - начальный индекс с конца строки, -1 - конечный индекс (не включается)
console.log(logg.slice(-5)); // -5 - начальный индекс с конца строки, до конца строки
console.log(logg.slice(0, 5)); // 0 - начальный индекс, 5 - конечный индекс (не включается)


//substring - не работает с отрицательными числами 

console.log(logg.substring(6, 11)); // 6 - начальный индекс, 11 - конечный индекс (не включается) 

// Substr - Сколько символов необходимо вырезать, чтобы получить "world"
console.log(logg.substr(4, 5)); // 4 - начальный индекс, 5 - количество символов, которые нужно вырезать
 
// Числа

const num = 12.2;
console.log(Math.round(num));

const numToText = "12.2px";
console.log(parseInt(numToText)); // 12 - преобразует строку в число, игнорируя все, что идет после числа

const numToFloat = "12.2px";
console.log(parseFloat(numToFloat)); // 12.2 - преобразует строку в число, игнорируя все, что идет после числа