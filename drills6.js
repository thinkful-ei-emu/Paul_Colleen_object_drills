'use strict';

function decode(word){
  const cipher = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
  };

  if (word[0] in cipher){
  //takes the value of the key and returns the letter corresponding to the index in the word where
  //index is the value of the key
    return word[cipher[word[0]]];
  }  
  return ' ';   
}

function decodeWord(str){
  let message = '';
  let input = str.toLowerCase().split(' ').filter(Boolean);
  for (let i=0; i < input.length; i++){
    message += decode(input[i]);
  }
  return message;
}

console.log(decodeWord('craft block argon meter bells brown croon droop'));

/* console.log(decode('craft'))
console.log(decode('block'))
console.log(decode('argon'))
console.log(decode('meter'))
console.log(decode('bells'))
console.log(decode('brown'))
console.log(decode('croon'))
console.log(decode('droop'))
 */