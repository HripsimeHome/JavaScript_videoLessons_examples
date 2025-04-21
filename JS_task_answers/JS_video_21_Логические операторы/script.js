//2 - Основы JavaScript - Video 20.21

//21 - Задачи.txt
 
//Что выведет в консоль код?

'use strict';

// Задача 1

// Output 2  // 4 * 9
//console.log(4 * 3 ** 2);

// Output 2
//console.log( NaN || 2 || undefined );

 // Output NaN
//console.log( NaN && 2 && undefined );

// Output 3
//console.log( 1 && 2 && 3 );

// Output fa;se
//console.log( !1 && 2 || !3 );

// Output 25
// console.log( 25 || null && !3 );
 
// Output 5
//console.log( NaN || null || !3 || undefined || 5 );

// Output 5
//console.log( NaN || null && !3 && undefined || 5);

// Output  true
//console.log( 5 === 5 && 3 > 1 || 5);



// Задача 2

//Выполняется ли условие?
// Да. Output Done!

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
  console.log("Done!")
}



// Задача 3
// Выполняется ли условие?
// Да, потому что есть хотябы один nugget



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }



// Задача 4
//Выполняется ли условие?
// Output - Нет.



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }