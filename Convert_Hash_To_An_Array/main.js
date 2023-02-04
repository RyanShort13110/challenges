/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Note: The output array should be sorted alphabetically by key name.

Good Luck!
*/


function convertHashToArray(hash){
  return Object.keys(hash).sort().map(key => [key, hash[key]]);
}


// test cases


describe("Basic tests",() =>{
  Test.assertDeepEquals(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);
  Test.assertDeepEquals(convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]);
  Test.assertDeepEquals(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
  Test.assertDeepEquals(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]);
  Test.assertDeepEquals(convertHashToArray({}),[]);
  });