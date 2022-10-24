// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


function updateLight(current) {
  if(current === 'green'){
    return 'yellow';
  }else if(current === 'yellow'){
    return 'red';
  }else if(current === 'red'){
    return 'green';
  }
}


// test cases


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(updateLight("green"), "yellow");
    assert.strictEqual(updateLight("yellow"), "red");
    assert.strictEqual(updateLight("red"), "green");
  });
});