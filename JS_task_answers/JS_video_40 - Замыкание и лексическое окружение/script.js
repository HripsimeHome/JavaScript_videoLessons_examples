 'use strict';
 
 let number = 5; debugger;
 // logNUmber();  Если вызов функции будет здесь увидим 5
 function logNumber () {
    let number = 4; debugger;
    console.log(number);
 }

 number = 6;
 //Если вызов функции будет здесь увидим 6
 logNumber(); debugger;

 // Каждый раз при вызове функции значеие меняется, функция берет последнее обновленное значение
 number = 8;
 
 logNumber(); debugger;





 function createCounter() {
   let counter = 0; // Здесь с каждым разом перезаписывается значение и будет сперва 1 2  3

    const myFunction = function() { debugger
       // let counter = 0; // А здес остается как 1 и будет 1 1 1 
        counter = counter +1; debugger
        return counter; debugger
    }
    return myFunction;
 }

 //  Использование
debugger
const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);


// Здесь выведется ошибка, так как цонсоле.лог находится вне фигурных скобок
//переенная msg не доступна снаружи, только видна в лексическом окружении
{
   let msg = "Hello";
}

console.log(msg)

//Тоже самое относится к примеру цикл в цикле -  снаружи num получить не можеm 

for (let i = 0; i < 9; i++) {
   for (let j = 0; j < 9; j++) {
      let num = 3;
   }

   console.log(num); //  снаружи num получить не можеm 
}