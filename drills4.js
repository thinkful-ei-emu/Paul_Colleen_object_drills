/* Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction,
 or your own inventions.
Store these objects in an array.
Iterate over the array and use console.log to show each person's job title and name. */
'use strict';

/* const cardOne = {
  name: 'Jack Sparrow',
  jobTitle: 'pirate'
};
const cardTwo = {
  name: 'Kate Winslet',
  jobTitle: 'actress'
};
const cardThree = {
  name: 'Bob Ross',
  jobTitle: 'painter'
};

const cardFour = {
  name: 'Harry Potter',
  jobTitle: 'auror'
};
 */
function createPerson (name, jobTitle){
  return {
    name,
    jobTitle
  };
}

let businessCards = [
  createPerson('Bob Ross', 'painter'), 
  createPerson('Harry Potter', 'auror'),
  createPerson('Bobby Berk', 'designer')
];


//let businessCards = [cardOne, cardTwo, cardThree, cardFour];

for (let i=0; i < businessCards.length; i++){
  console.log(`${businessCards[i].name}: ${businessCards[i].jobTitle}`);
}