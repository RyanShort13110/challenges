/*
Write a function named setAlarm which receives two parameters. The first 
parameter, employed, is true whenever you are employed and the second 
parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation 
(because these are the circumstances under which you need to set an alarm).
It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/


function setAlarm(employed, vacation){
  return employed && !vacation;
}


// test cases


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Test Suite",()=>{
  
  it("Fixed tests",()=>{
    assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
    assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
    assert.strictEqual(setAlarm(true, false), true,"Should be true.");
    assert.strictEqual(setAlarm(false,false), false, "Should be false.");
  });
  
  it("Random tests",()=>{
    
    const sol = (a,b) => a && ! b
    
    function randInt(a, b) { return Math.random() * (b - a + 1) + a | 0 }

    let a,b
    for ( let i=0; i<1000;i++) {
      [a,b]=[[false,false],[false,true],[true,false],[true,true]][randInt(0,3)]
      const expected = sol(a,b);
      const actual = setAlarm(a,b);        
      assert.strictEqual(actual,expected, `Testing for employed = ${a}, vacation = ${b}`);
    };
  });
});