/*
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

*/

// solution

var greet_abe = function() {
  var name = 'Abe';
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};


// test cases

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(greet_abe(), 'Hello, Abe!', 'greet_abe() is not greeting Abe');
    assert.strictEqual(greet_ben(), 'Hello, Ben!', 'greet_ben() is not greeting Ben');
  });
});