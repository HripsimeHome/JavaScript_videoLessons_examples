 
'use strict';
 
const options = {
  name: "square",
  width: 1024,
  height: 768,
  colors: {
    border: "black",
    bg: "red"
  },
  makeTest: function() {
    console.log("Test of object's method.");
  }
};


console.log(options.name)

//delete options.name;

console.log(options);


console.log(Object.keys(options));
console.log(Object.keys(options).length);

options.makeTest();

// Деструктуризация - Вытаащить вложенные свойства из объекта

const {border, bg} = options.colors;
console.log(border, bg);


// For of не работает для объектов - работает в функции

for (let key in options) { 
  console.log(`Свойство ${key} имеет значение ${options[key]}`)
}

// Так как colors: { border: "black", bg: "red" } - также объект в консоли увидим 
// Свойство colors имеет значение [object Object] - поэтому нужно сделать перебор в colors

for (let key in options) { 
  if (typeof(options[key]) === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    } 
  } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`) ;   
  } 
}

// Чтобы узнать какое количество есть в объекте нужно запустить counter

let counter = 0;
for (let key in options) { 
  if (typeof(options[key]) === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
     // counter++;
    } 
  } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`) ;   
      counter++;
  } 
}

console.log(counter);


//какое количество свойств содержится в объекте

// let counter = 0;
// for (let key in options) { 
//   counter++;
// }

// console.log(counter);