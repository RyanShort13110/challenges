/*
Description:

An ordered sequence of numbers from 1 to N is given. One number might have deleted from 
it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.

If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/

function findDeletedNumber(arr, mixArr) {
  let arrSum = arr.reduce((a,b) => a + b, 0)
  let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
  return arrSum - mixArrSum
}

// test cases

describe("Basic tests",() =>{
  Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9]), 5);
  Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,9,5]), 1);
  Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,1,7,8,9,5]), 6);
})

describe("Null tests",() =>{
  Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9,5]), 0);
  Test.assertEquals(findDeletedNumber([], []), 0);
})

describe("Random Tests", function(){
    for (let i = 0; i < 100; i++) {
        let arr = [...Array(Math.random()*100+1|0)].map((_,i)=>i+1);
        let mix = Test.randomize(arr);
        let ans = Math.random()>0.2 ? mix.pop() : 0;
        Test.assertEquals(findDeletedNumber(arr,mix),ans);
    }
});