 
'use strict';
 
let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
  health: 400, 
  armor: 100,
  sayHello: function() {
    console.log("Hello");
  }
};

const jonh = {
  health: 100
}

// __proto__ - Устаревший метод, сейчас используэт Object.create(), Object.getPrototypeOf(), Object.settPrototypeOf()  

jonh.__proto__ = soldier;

console.log(jonh.armor)
// jonh.sayHello();
//  Object.settPrototypeOf()   -  тоже что и jonh.__proto__ 

Object.setPrototypeOf(jonh, soldier); // Это когда уже когда создали const jonh
jonh.sayHello();

// Вариант когда нужно СОЗДАТЬ jonh  



const soldier2 = {
  health: 400, 
  armor: 100,
  sayHello: function() {
    console.log("Hello for jonh2");
  }
};


const jonh2 = Object.create(soldier2);
jonh2.sayHello();
 