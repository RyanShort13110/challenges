// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).


function billboard(name, price = 30){
  let total = 0;
  for(let i = 0; i < name.length; i++){
    total += price;
  }
  return total;
}





describe("Basic tests",() =>{
  Test.assertEquals((billboard+"").indexOf("*"), -1, "You are not allwed to use multuplier '*' operator");
  Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
  Test.assertEquals(billboard("Abishai Charalampos"), 570);
  Test.assertEquals(billboard("Idwal Augustin"), 420);
  Test.assertEquals(billboard("Hadufuns John",20), 260);
  Test.assertEquals(billboard("Zoroaster Donnchadh"), 570);
  Test.assertEquals(billboard("Claude Miljenko"), 450);
  Test.assertEquals(billboard("Werner Vígi",15), 165);
  Test.assertEquals(billboard("Anani Fridumar"), 420);
  Test.assertEquals(billboard("Paolo Oli"), 270);
  Test.assertEquals(billboard("Hjalmar Liupold",40), 600);
  Test.assertEquals(billboard("Simon Eadwulf"), 390);
  })
  
  describe("Random tests",() =>{
  function randomString () {
      const randint=(a,b)=>Math.floor(Math.random()*(b-a+1)+a);
      let text = []; 
      let len = randint(0,99);
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
  
  
      for (let i=0; i < len; i++ ) {
       text.push(possible[randint(0,possible.length-1)]);
      }
      return text.join("");
  }
  for (let i=0;i<40;i++){
    let s = randomString(), p=Math.floor(Math.random()*10+1)*5;
    it(`Testing for '${s}' and ${p}`,() =>{
    Test.assertEquals(billboard(s,p), s.length * p)
    })
  }
  })