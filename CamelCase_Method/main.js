/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or 
  camelCase in Java) for strings. All words must have their first letter capitalized 
  without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

*/


String.prototype.camelCase=function(){
  return this.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}


// test cases


const { assert } = require('chai');

it("Basic tests",() =>{
  assert.strictEqual("test case".camelCase(), "TestCase");
  assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
  assert.strictEqual("say hello".camelCase(), "SayHello");
  assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
  assert.strictEqual("".camelCase(), "");
})