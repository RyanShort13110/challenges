// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats. 


function sumEvenNumbers(input) {
  let evenNums = [];
  input.forEach((x,i) => {
    if(x % 2 === 0){
      evenNums.push(x);
    }
  })
  return evenNums.reduce((a,b) => a + b, 0);
}

// or as an arrow function

const sumEvenNumbers = input => input.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);




// test case


const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
  });
});
