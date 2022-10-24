// Given the string representations of two integers, return the string representation of the sum of those integers.

/* For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9". */

function sumStrings(a,b) { 
  return (BigInt(a) + BigInt(b)).toString();
}


// test cases


const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sumStrings('123','456'),'579')
  });
});
