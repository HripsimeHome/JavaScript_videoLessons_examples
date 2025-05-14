 'use strict';
 

 // getElementById

const box = document.getElementById("box");

console.log(box); // Посмотреть толко б браузере, так как только браузер понимает document, в консоли не будет видно

const btns = document.getElementsByTagName('button');
console.log(btns);

 // Чтобы получить только вторую кнопку, нужно указать его индекс
 // Первый способ
const btns2 = document.getElementsByTagName('button') [1];
console.log(btns2);

 // Второй способ
const btns3 = document.getElementsByTagName('button');
console.log(btns3 [1]);

// Если на странице всего лишь одна кнопка, мы должны обратиться к его индексу, так как без этого браузер возвращает HTML коллекцию

const btns4 = document.getElementsByTagName('button');
console.log(btns4[0]);


// getElementsByClassName

const circles = document.getElementsByClassName('circle');
console.log(circles);

//  querySelectorAll - здесь можно употребить id, class, pseudocalss , atribute....

const hearts = document.querySelectorAll('.heart');  // Ставится точка  как селектор класса, или # для id
console.log(hearts); // В консоли браузераувидим NodeList(3), где в 

// Чтобы увидеть все сердечки в консоли браузера используем метод forEach 
hearts.forEach(item => {
console.log(item);
});

//  querySelector - получаем только первый элемент на странице или например, из есех кнопок

const oneHeart  = document.querySelector('.heart'); // Ставится точка  как селектор класса, или # для id
console.log(oneHeart);