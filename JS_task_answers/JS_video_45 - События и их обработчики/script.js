
const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

// В таком случае  потеряется первая функция, т.т. сразу увидим   alert('Second click')
/*
btn.onclick = function() {
  alert('Click');
};

btn.onclick = function() {
  alert('Second click');
};
*/

// Здесь будет Callback функция, которая выполняется строго за другими
btn.addEventListener("click", () => {
  alert('Click');
});

 // В таком случае не потеряется первая функция
btn.addEventListener("click", () => {
  alert('Second click');
});

btn.addEventListener("mouseenter", () => {
  console.log('Hover');
});

// В этом примере третья кнопка исзезнет при наведении мыши

btn.addEventListener("mouseenter", (e) => {
 // console.log(e);
   console.log(e.target);
   e.target.remove();
});


// Для удаления
// В этом примере третья кнопка не исзезнет при наведении мыши
const deleteElement = (e) => {
  console.log(e.target);
};

// Здесь deleteElement  - это невызов функции, а просто передаем
btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);


 //Для удаления в условии. Если i будет равно 1, то мы удаляем этот обработчик событий, он больше нам не нужен

 let i = 0;
 const deleteElement2 = (e) => {
  console.log(e.target);
  i++;
  if (i == 1) {
    btn.removeEventListener('click', deleteElement2);
  }
};

 //Всплытие событий. Когда сперва событие случается на вложенном элементе, затем поднимается наверх по иерархии вверх DOM дерева и происходит другое событие. Пример длв overlay

 
 const deleteElement3 = (e) => {
  console.log(e.target);
   console.log(e.currentTarget);
  console.log(e.type);  
};
overlay.addEventListener('click', deleteElement3);

// Отмен ссылки

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(event.target);
});

// Посмотреть в консоли
 btns.forEach(btn => {
   btn.addEventListener('click', deleteElement); // 
 })

 //Если хотим, чтобы сработало один раз определяем свойство once

  btns.forEach(btn => {
   btn.addEventListener('click', deleteElement, {once: true}); // 
 });