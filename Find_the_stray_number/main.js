/*
You are given an odd-length array of integers, in which all of them are the same, 
except for one single number.

Complete the method which accepts such an array, and returns that single 
different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/


// solution

function stray(numbers){
  sorted = numbers.sort((a,b) => a-b)
  if(sorted[0] == sorted[1]){
    return sorted[sorted.length-1]
  }else{
    return sorted[0]
  }
}


// test cases

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed Tests", () => {
  it("Should pass Fixed Tests", () => {
    assert.strictEqual(stray([1, 1, 2]), 2);

    assert.strictEqual(stray([17, 17, 3, 17, 17, 17, 17]), 3);

    assert.strictEqual(stray([8, 1, 1, 1, 1, 1, 1]), 8);

    assert.strictEqual(stray([1, 1, 1, 1, 1, 1, 0]), 0);

    assert.strictEqual(stray([0, 0, 0, 7, 0, 0, 0]), 7);

    assert.strictEqual(stray([-21, -21, -21, -21, -6, -21, -21]), -6);
  });
});