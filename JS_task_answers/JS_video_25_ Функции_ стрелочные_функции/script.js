 
'use strict';
 
// Function declaration - можно вызвать, потом объявить. Файл скрипта сперва читает все функции, потом все переменные, поэтому полается, что функция уже просмотрена

function showFirstMessage (text) {
    console.log(text)
}

showFirstMessage("Hello, function");

let num = 20;

function showNum () {
    let num = 10;
   // console.log(num); - если написать здесь, то выведет 10
}

showNum();
console.log(num);


//Замыкание  -  шщет внутри себя, переменную, если не находит смотрит на уровень выше, видит переменные , которые ей доступны

let numner = 20;

function showNumber () {     
    console.log(numner);    
}

showNumber();
console.log(numner);

//Return

function calc(a, b) {
    return(a+b);
   // console.log('Не правильно'); - Не отобразится в консоли, так как после return код не работает - называется  Unreachable
}

console.log(calc(4, 6));
console.log(calc(3, 45));
console.log(calc(2, 89));


// Return - вариант, когда return возвращает

function ret () {
    let num  = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

//Function expression - вызывается только после объявления (как в React). Присваивается к переменной.


const logger = function() {
    console.log("Hello");
}

logger();

//Arrow function

const calculation = (a, b) => {
    return a+b;   
};

console.log(calculation(5, 10)); 


// илиприсвоит переменной Result, потом вывести в косоль

/*const result = calculation(5, 10);
console.log(result);
*/
