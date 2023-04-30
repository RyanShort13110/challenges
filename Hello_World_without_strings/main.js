/*
You need to create a function, helloWorld, that will return the String Hello, World! 
without actually using raw strings. This includes quotes, double quotes and template 
strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`

Good luck and try to be as creative as possible!
*/


// solution 

function helloWorld() {
  let h = String.fromCharCode(72);
  let e = String.fromCharCode(101);
  let l = String.fromCharCode(108);
  let o = String.fromCharCode(111);
  let w = String.fromCharCode(87);
  let r = String.fromCharCode(114);
  let d = String.fromCharCode(100);
  let exclamation = String.fromCharCode(33);
  
  let hello = new String(h + e + l + l + o);
  let comma = new String(String.fromCharCode(44));
  let space = new String(String.fromCharCode(32));
  let world = new String(w + o + r + l + d);
  let ending = new String(exclamation);
  
  return hello.concat(comma, space, world, ending);
}


// test cases

const Test = require('@codewars/test-compat');

describe("Hello World with out Strings", () => {
  it("Basic Checks", () => {
    Test.expect(helloWorld != undefined, "You have not defined the helloWorld function!")
    Test.expect(helloWorld.toString().indexOf("\"") == -1, "You cannot use raw Strings");
    Test.expect(helloWorld.toString().indexOf("'") == -1, "You cannot use raw Strings");
    Test.expect(helloWorld.toString().indexOf("`") == -1, "You cannot use template Strings");
  });
  
  it("Hello, World!", () => {
    Test.assertEquals(helloWorld(), "Hello, World!");
  });
});