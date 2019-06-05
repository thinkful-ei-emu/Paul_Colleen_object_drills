'use strict';
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

/* Write a function findOne() that takes in the following two arguments:

arr - array of Heroes objects to search through
query - object with one or more key/value pairs
that must exactly match the target Hero
The first matching result should be returned even if multiple match. 
If a match isn't found, return null */

function findOne(arr, query){
  for (let i =0; i < arr.length; i++){
    let notYourHero = 0;
    for (const key in query) {
      if (arr[i][key] !== query[key]) {
        notYourHero ++;
        break;
      } 
    }
    if (notYourHero === 0){
      console.log(arr[i]);
      return arr[i];
    } 
  }
  console.log(null);
  return null;
}
findOne(HEROES, { id: 1 });
findOne(HEROES, { id: 10 });
findOne(HEROES, { id: 2, name: 'Aquaman' });
findOne(HEROES, { id: 5, squad: 'Justice League' });
findOne(HEROES, { squad: 'Justice League' });
