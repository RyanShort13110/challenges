/*
  Create a method none? (JS none) that 
  accepts an array and a block (JS: a 
  function), and returns true if the 
  block (/function) returns true for none 
  of the items in the array. An empty 
  list should return true.
*/


function none(arr, fun){
  return !arr.some(fun)
}


// test cases


describe("Tests", () => {
  it("test", () => {
Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 5 }), true)
Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 4 }), false)

  });
});
