/*
ASCII Total
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
*/

// solution
function uniTotal (string) {
  let sum = 0;
  for(let i = 0; i < string.length; i++){
    sum += string.charCodeAt(i);
  }
  return sum;
}

// test cases
const strictEqual = require('chai').assert.strictEqual;

function doTest (string, expected) {
  const actual = uniTotal(string);
  strictEqual(actual, expected, `for string "${string}":\n`);
}

it("sample tests", () => {
  doTest("", 0);
  doTest("a", 97);
  doTest("b", 98);
  doTest("c", 99);
  doTest("d", 100);
  doTest("e", 101);
  doTest("aaa", 291);
  doTest("Mary Had A Little Lamb", 1873);
});

it("random tests", () => {
  const chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

  const randInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const sample = xs => xs[randInt(0, xs.length - 1)];
  const solution = string => [...string].reduce((sum, char) => sum + char.codePointAt(0), 0);

  for (let i = 0; i < 100; i++) {
    const string = Array.from({length : randInt(0, 30)}, _ => sample(chars)).join('');
    doTest(string, solution(string));
  }
});