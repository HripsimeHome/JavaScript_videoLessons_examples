 
'use strict';

const arr = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(10);
// console.log(arr);

// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//For off  - Здесь работает Break и contiiue

for (let value of arr) {
  console.log(value);
}

////ForEach - Здесь НЕ работает Break и contiiue

arr.forEach(function(item, i, arr) {
    console.log(`${i} : ${item} внутри массива ${arr}`);
});


// Split - split(", ") перечислит в промт браузера назваия через запятую и пробел;
// Join - отобразит элементы массива через ; и пробел 
// Sort  - юлементы как строки, построит по алфавитному порядлу

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products);
console.log(products.join("; "));


let str2 = "apple,banana,orange,strawberry2";
let arr2 = str2.split(" ");  
console.log(arr2); // ['apple', 'banana', 'orange']


//Sort  для числе работает не по возврастанию

const array = [2, 13, 26, 8, 10];
array.sort();
array.sort(compareNum);
console.log(array);

// Сортирует по порядку. Callback функцию передаем в метод sort - array.sort(compareNum);
function compareNum (a, b) {
  return a-b;
}

//Splice - Метод splice() в JavaScript используется для изменения массива, позволяя удалять, добавлять или заменять элементы.

//start — индекс, с которого начинаем изменения.
// deleteCount — сколько элементов удалить.
// item1, item2, ... — (необязательные) элементы, которые нужно вставить на место удалённых. 
//изменяет оригинальный массив

let arrNum = [1, 2, 30, 4, 5];
arrNum.splice(1, 2);// начиная с индекса 1, удалить 2 элемента
console.log(arrNum); // [ 1, 4, 5 ]

// Заменим элемент 'orange' на 'kiwi' в массиве:

let fruits = ['apple', 'orange', 'banana'];
fruits.splice(1, 1, 'kiwi');
console.log(fruits);  // ['apple', 'kiwi', 'banana']





//Slice  Метод slice() в JavaScript не изменяет оригинальный массив, а создаёт новый массив, копируя в него часть элементов.

//start — индекс, с которого начать (включительно).
//end — индекс, до которого копировать (не включительно).

let arrNumbers = [10, 20, 30, 40, 50];
let newArNumbers = arrNumbers.slice(1, 3);
console.log(newArNumbers); // [20, 30]