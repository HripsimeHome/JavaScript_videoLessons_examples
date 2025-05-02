 
'use strict';
 
function first() {
  //do something
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

// Callback function

//Variant 1

function learnJS (lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

// Callback function
learnJS('JavaScript', function() {
  console.log("Я прошел этот урок!");
} );


//Variant 2 с функцией done

function learnJS2 (lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done () {
  console.log("Я прошел этот урок!");
}

learnJS2('JavaScript', done);