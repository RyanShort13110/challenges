/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the 
array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return 
[1, 2, 3, 4, 5, 6, 7, 8, 9].
*/


function flattenAndSort(array) {
  while(array.some(Array.isArray)){
  array = [].concat(...array)
}
return array.sort((a,b) => a-b)
}


// test cases


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example test cases", function() {
  it("Should pass example tests", function() {
    assert.deepEqual(flattenAndSort([]), []);
    assert.deepEqual(flattenAndSort([[], []]), []);
    assert.deepEqual(flattenAndSort([[], [1]]), [1]);
    assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
  });    
});