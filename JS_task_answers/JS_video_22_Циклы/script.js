//2 - Основы JavaScript - Video 22

'use strict';

// While
let num = 50;

while ( num < 55) {
  console.log(num);
  num ++;
} 


// Do While
let number = 52;

do {
  console.log(number);
  number++;
}

while ( number < 60);

//For

for (let i = 1; i < 8; i++) {
  console.log(i);
}

//For, break 

for (let i = 0; i < 10; i++) {
  if(i === 6) {
    break;
  }
  console.log(i);
}

//For , continiue

for (let i = 0; i < 10; i++) {
  if (i ===7) {
    continue;
  }
  console.log(i);
}