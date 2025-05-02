 
'use strict';
  

// Обмен валюты


// function convert (amount) {
//     console.log (28 * amount);
// }

//  convert(500);

// Поставили аргументом для curr
const usdCurr = 28;
const eurCurr = 32;
 
function convert (amount, curr) {
    console.log (amount * curr);
}

 convert(500, usdCurr);
 convert(500, eurCurr);