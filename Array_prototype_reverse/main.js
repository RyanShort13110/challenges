/*
Description:

The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original 
array. Then then it returns that same, original array. No new arrays should need 
to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
*/


// solution

Array.prototype.reverse = function() {
  let array = this.splice(0);
  while(array.length){
    this.push(array.pop());
  }
  return this;
};


// test cases

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed Tests", () => {
  it("Should pass fixed tests", () => {
    assert.deepEqual([1, 2, 3, 4].reverse(), [4,3,2,1]);
    assert.deepEqual(["a", "b", "c"].reverse(), ["c", "b", "a"]);
    assert.deepEqual([].reverse(), []);
  });
});
    
describe("Random Tests", () => {
  let value, input = [], reversed, output = [], length;
  for(let i = 0; i < 100; i++){
    length = Math.random() * 30;
    for (let j = 0; j < length; j++) {
        value = Math.floor(Math.random()*100);
        input.push(value);
        output.unshift(value);
    } 

    it(`For input = [${input.join(", ")}]`, () => {        
      reversed = input.reverse();      
      assert.isTrue(reversed === input, "Original array should be returned.");
      assert.deepEqual(reversed, output, "Items should be reversed.");
      input.length = 0; output.length = 0; reversed.length = 0;
    });      
  }
});