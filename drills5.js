'use strict';

function createWorker (name, title,boss=0){
  return {
    name,
    title,
    boss,
    describe:function(){
      if(boss===0){
        console.log(`${title} ${name} doesn't report to anybody.`);
      }
      else{
        console.log(`${title} ${name} reports to ${boss}.`);
      }
    }
  };
}

let businessCards = [
  createWorker('L', 'Paintminion','M'), 
  createWorker('M', 'Auror', 'A'),
  createWorker('A', 'Overlord')
];

for(let i=0; i<businessCards.length;++i){
  businessCards[i].describe();
}