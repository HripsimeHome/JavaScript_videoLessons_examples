//2 - Основы JavaScript - Video 20

//21 - Задачи.txt
 

'use strict';

const a = 4;
const b= 9;

if (a === b) {
  console.log("Ok!");
} else {
  console.log("Error");
};


const num = 50;

if (num < 49) {
  console.log("Error");
} else if (num > 100) {
  console.log("Много");
} else {
  console.log("Ok!");
};

(num == 50) ? console.log("Ok!") : console.log("Error");


const number =50;

switch (number) {
  case 49: 
    console.log("Не верно");
    break;
  case 100:
    console.log("Не верно");
    break;
  case 50:
    console.log("В точку!");
    break;
  default:
    console.log("Не в этот раз.");
    break;
}
