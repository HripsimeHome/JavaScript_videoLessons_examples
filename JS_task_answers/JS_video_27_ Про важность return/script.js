 
'use strict';
  
// Обмен валюты - Передаем результат в другую функцию

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

convert(500, usdCurr);


function promotion(result) {
   console.log(result * discount);
}

const res = convert(500, usdCurr); 
promotion(res);

//Можно писать как функция в функции
// promotion(convert(500, usdCurr));

 
// Return - когда достигнет до трех. Не отобразится даже последний console.log("Done"), так ак после return завершит все и не дойдет до Done


function stopDoing () {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log("Done");
}

stopDoing();


//Функция все рвано что-то возвращает даже если мы не указываем return. 
//Возвратит undefined - т.е. true


function doNothing() {};
console.log(doNothing() === undefined);

// После return не ставить перевод строки. код не сработает. JS сам поставит знак ; после return и не сработает.