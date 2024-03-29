/*
Opposites Attract
Timmy & Sarah think they are in love, but around where they live, they will 
only know once they pick a flower each. If one of the flowers has an even 
number of petals and the other has an odd number of petals it means they are 
in love.

Write a function that will take the number of petals of each flower and 
return true if they are in love and false if they aren't.

*/

// solution
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 !== 0
}


// test cases
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0; 

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(lovefunc(1,4), true)
    assert.strictEqual(lovefunc(2,2), false)
    assert.strictEqual(lovefunc(0,1), true)
    assert.strictEqual(lovefunc(0,0), false)
  });
});

describe("lovefunc", function(){
  
  it("should work for random numbers", function(){
    for(let i = 0; i < 100; ++i){
      let flower1 = (Math.random() * 1000) | 0;
      let flower2 = (Math.random() * 1000) | 0;
      assert.strictEqual(lovefunc(flower1, flower2), (flower1 + flower2) % 2 === 1, "didn't work for flowers with " + flower1 + " and " + flower2 + " petals");
    }
  });
});
