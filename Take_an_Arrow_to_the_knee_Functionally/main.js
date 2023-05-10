/* 

Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details

You will be given an array of numbers which can be used using the 
String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the 
number to a character. It is recommended to map over the array of numbers and 
convert each number to the corresponding ascii character.
Examples

These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a*/


// solution

var ArrowFunc = function(arr) {
  return arr.map(char => String.fromCharCode(char)).join('');
}


// test cases

describe('Fixed tests', () => {
  Test.assertEquals(ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters');
  Test.assertEquals(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!');
  Test.assertEquals(ArrowFunc( [73,32,119,97,115,32,97,110,32,97,100,118,101,110,116,117,114,101,114,32,108,105,107,101,32,121,111,117,44,32,117,110,116,105,108,32,73,32,116,111,111,107,32,97,110,32,97,114,114,111,119,32,116,111,32,116,104,101,32,107,110,101,101]), 'I was an adventurer like you, until I took an arrow to the knee', 'Final one, come on!');
});

describe('Random tests', () => {
  for (let i3214 = 3; i3214 < 42; i3214++) {
    let codeArr = [];
    for (let i987 = i3214; i987 > 0; i987--) { codeArr.push(~~(Math.random()*60 + 64)); }
    Test.assertEquals(ArrowFunc(codeArr), codeArr.map(a => String.fromCharCode(a)).join(''));
  }
});