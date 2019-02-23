'use strict';

/*
first create the logic behind the program
if a number is divisible by 3, it turns 
into 'fizz.' If it is divisible by 5, it
turns into 'buzz'. If it is divisible by 
both 3 and 5, it turns into 'fizzbuzz.'
*/

function fizzBuzzer(num){
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


function main(){
  $('.number-chooser').submit(function(event){
    event.preventDefault();
  });
}

$(main);