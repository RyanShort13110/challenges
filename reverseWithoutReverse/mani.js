// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)


function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}


// test cases


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual( reverse([1,2,3]), [3,2,1] )
    assert.deepEqual( reverse([1,null,14,"two"]), ["two",14,null,1] )
  });
});