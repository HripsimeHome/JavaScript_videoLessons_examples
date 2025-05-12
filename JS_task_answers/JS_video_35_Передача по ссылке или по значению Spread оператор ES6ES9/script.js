 
'use strict';

// Поверхностные копии


let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


// Здесь модифицируя значение copyObj -  copyObj.a = 10; поменяется и в obj и obj.a будет также 10, так как применяется передача по ссылке, а не по значению
const obj = {
      a: 5,
      b: 1
};

const copyObj =  obj; // Ссылка
copyObj.a = 10;

console.log(copyObj); // { a: 10, b: 1 }
console.log(obj); // { a: 10, b: 1 }



// Теперь как создать копию массивов, объектов
// Это первый способ с помощью цикла
// Функция создаст новый объект, т.е. копию уже

function copy(mainObj) {
    let objCopy = {};

    let ley;
    for (key in mainObj) {
      objCopy[key] = mainObj[key];
    }

    return objCopy;
};

const numbers = {
  a: 2, 
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};


const newNumbers = copy(numbers);

newNumbers.а  = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);


// Это второй способ с помощью цикла - Object.assign();

// Это поверхностаняя копия, т.е. измененив вложенных не подействует  - а: 2 поменяем на 22, увидим 22 в консоли, но если поменяем c: {x: 8} не увидим 8, а останется как 7

 //Независимая копия объекта, не зависит ни от add, ни от numbers

 const numbers2 = {
  a: 2, 
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const add = {
  d: 17,
  e: 20
};

//console.log(Object.assign(numbers2, add));
//console.log(numbers2);


// Тoже самос сделаем с пустым объектом, чтобы создать просто копию объекта
const clone  = Object.assign({}, add);

clone.d = 20;
clone.а = 6;

console.log(add); // d: 17 - не поменялось
console.log(clone); // d: 20 - поменялось - В clone -лежит поверхностная копия предыдуэего объекта



// Третий метод создания поверхностной копии  - посредством Slice. 

// Теперь для массияов. чтобы создать копию массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();


newArray[1] = "changed"
console.log(newArray);
console.log(oldArray);

 
//Четвертый метод создания поверхностной копии - Spread 

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['worpdpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);


function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7]

log(...num);

// log(1,20,3); yete sovorakan dzevov kanchneq

// Copy of originalAaray with Spread - Также Четвертый метод создания поверхностной копии - Spread 

// As array
const originalArray = ['a', 'b']; 
const copyArray = [...originalArray];

console.log(copyArray);

//As object
const q = {
  one: 1, 
  two: 2
};

const newObj = {...q};
console.log(newObj);












// From chatGPT Object.assign();
//  Метод Object.assign() в JavaScript используется для копирования свойств из одного или нескольких объектов в другой объект

// Object.assign(target, source1, source2, ...)
// target — объект, в который копируются свойства.
// source — один или несколько объектов, из которых берутся свойства.


let target = {
  a: 1
};

let source = {
  b: 2,
  c: 3
}

Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

//Если target уже содержит такие же свойства — они будут перезаписаны:

const target1 = {
  a: 1,
  b: 5
};

const source2 = {
  b: 2,
  c: 3
}

Object.assign(target1, source2);
console.log(target1); // { a: 1, b: 2, c: 3 }



// Object.assign() не делает глубокую копию (вложенные объекты копируются по ссылке):

const object1 = {
  name: "Anna",
  address: {
    city: "Berlin"
  }
};

const copy = Object.assign({}, object1);

copy.address.city = "London";
console.log(object1.address.city); // "London" — ссылка!
console.log(copy.address.city);
console.log(copy);


 