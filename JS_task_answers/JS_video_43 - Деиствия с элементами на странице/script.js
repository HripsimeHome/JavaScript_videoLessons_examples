 'use strict';
 

const box = document.getElementById("box"),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      //hearts = wrapper.querySelector(".heart"),  // Кнкретно из класса wrapper
      oneHeart  = document.querySelector('.heart');


 console.dir(box);

 box.style.backgroundColor = 'blue';
 box.style.width = '500px';

 btns[1].style.borderRadius = '100%';
 circles[0].style.backgroundColor = 'red';

 //  Для определения нескольких CSS свойств испольауется cssText

 box.style.cssText = 'background-color: green; width: 100;'


 //Если применить стиль к нескольким элементам применим querySelectorAll. Это пример с циклом, мы небудем почти использовать

//  for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
//  }


hearts.forEach(item =>  {
  item.style.backgroundColor = 'blue';
});


// createElement

// Налету создадим тег div. ОН на странице не появится, только создастся внутри  JS
const div = document.createElement('div');

//Таким же образом можем создавать и текстовые узлы. НО этот метод редко испольауется
const text = document.createTextNode('Тут был я');

// getElementsByClassName - устарел, не нужно испоьзовать

//

div.classList.add('black'); 
// Нужно поставить на страницу по отношению какого-то элемента
 //Берем body как родителя diva и во внутрь кладем div
 document.body.append(div)

 //Если на странице один класс можно исползовать querySelector(); 
 // Добавится как последний div в div-е с классом wrapper

 document.querySelector('.wrapper').append(div);
 //  document.querySelector('#box').append(div);

// Добавится перед классом wrapper
document.querySelector('.wrapper').prepend(div);

// Before - Добавится перед первым элементом сердечки. Раньше был insertBefore
hearts[0].before(div);


// After - Добавится после первого элементасердечки
hearts[0].after(div);


// Удалениe

circles[0].remove(); // Раньше был removeChild()

// Заменить один элемент на другой. // Раньше был replaceChild()

hearts[0].replaceWith(circles[0]); // Чтобы увидеть результат поставить под комментарии circles[0].remove();

//Для всатвки тегов с текстом
div.innerHTML = "<h2>Hello world</h2>";

// ТОлко для текста

div.textContent = "Hello";

// Вставка элементов - beforebegin, beforeend, afterbegin, agterend

div.insertAdjustmentHTML("beforebegin", "<h2>Hello insertAdjustmentHTML</h2>");