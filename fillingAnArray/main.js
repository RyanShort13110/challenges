// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.


const arr = N => {
  let arr = [];
  for(let i = 0; i < N; i ++){
    arr.push(i);
  }
  return arr;
};


// test cases


const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('#arr creates a new array with the numbers 0 to N-1',() => {
  it('should return an array',() => assert.isArray(arr()));
  it('should return a blank array when called with no argument', () => assert.sameMembers(arr(), []));
  it('should return 0 to 3 when called with 4', () => assert.sameMembers(arr(4), [0,1,2,3]));
});