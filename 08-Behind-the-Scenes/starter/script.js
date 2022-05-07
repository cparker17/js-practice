'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Chris';
calcAge(1984);

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Chris';
let job = 'contractor';
const year = 1984;

console.log(this);
