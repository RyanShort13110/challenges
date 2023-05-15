// You're at the zoo... all the meerkats look weird. Something has gone terribly 
// wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which 
// will have three values (tail, body, head). It is your job to re-arrange the 
// array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you 
// have to change the element positions with the same exact logics

// Simples!



// soluton

function fixTheMeerkat(arr) {
  let savedAnimals = []

  while (arr.length) {
    savedAnimals.push(arr.pop())
  }

  return savedAnimals
}


// test cases

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
    assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
    assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
    assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
    assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
  })
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  
  const sol=arr=>arr.slice().reverse();
  
  const base=["Kenshiro","Raoh","Kaiou","Toki","Hyo","Jagi","Han","Souther","Falco","Rei","Shoki","Juda","Taiga","Shin","Boltz","Shin","Soria"]
  
  shuffle=function(arr){
    let i=arr.length, j, k;
    for (;i;){
      j=~~(Math.random()*arr.length);
      k=arr[--i];arr[i]=arr[j];arr[j]=k
    }
    return arr;
  }

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      let arr=shuffle(base).slice(0,3);
      assert.deepEqual(fixTheMeerkat(arr.slice()),sol(arr.slice()),`Testing for ${JSON.stringify(arr)}`)
    }
  });
})