/* Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique 
value of your choosing.
Loop over the object using for ... in
Use console.log to show each property name and its associated value. */
'use strict';
const aThing = {
  foo: 'make',
  bar: 'noggin',
  fum: 'banana',
  quux: 'house',
  spam: 'rabbit'

};

for (const key in aThing) {
  const output = `${key}: ${aThing[key]}`;
  console.log(output);
}