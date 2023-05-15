/*
Combine strings function

Create a function named combineNames that accepts two parameters (first and last 
  name). The function should return the full name.

Example:

combineNames('James', 'Stevens')

returns:

'James Stevens'

*/


// solution

const combineNames = (a,b) => `${a} ${b}`



// test cases

const Test = require('@codewars/test-compat');

describe('combine names', function () {
  it('fixed tests', function () {
    Test.assertEquals(combineNames('James', 'Stevens'), 'James Stevens')
  })
  it('random tests', function () {
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    const randLen = () => Math.floor(Math.random()*9) + 2
    const name = (l) => Array.from({length:l}, (num) => abc[Math.floor(Math.random()*25)]).join('')
    const solution = (first, last) => first + ' ' + last
    for (let i = 0; i < 100; i++) {
      let first = name(randLen());
      let last = name(randLen());
      Test.assertEquals(combineNames(first, last), solution(first, last)) 
    }
  })
})