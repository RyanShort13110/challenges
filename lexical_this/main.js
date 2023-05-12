/*
Lexical this
Complete the Person object, by completing the FillFriends function to fill the 
_friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled 
out which will fill the input into the Friends property. 
*/


// solution 

var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      this._friends = f
    }
  }
  return person;
}


// test cases

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
let GetPeopleArray = function(count){
  let p = ['john','matt','alex','cam','vinny','joe','steve','mary',
  'ash','joel','henry','brendan','roger','don','whimpy','chosen one',
  'master','frog','horse','cat','blop','god','morgan',
  'freeman','sean','shaun','dick','jeff','leroy','lee', 'santa'];
  let a = [];
  for(let i=0;i<count;i++){
    a.push(p[Math.floor((Math.random() * 30))])
  }
  return a;
};

let ec = function(person){
  if(person._friends.length != 0){
    Test.expect(false, '_friends should be empty!')
  }
};

let NormalTests = function(){
  console.log('Normal Tests')
  let people = [['bob','john'],
  ['bob','john','dave'],[],
  ['bob','john','dave','matt','alex']];
  
  for(let i=0;i<4;i++){
    let person = Person();
    ec(person);
    person.fillFriends(people[i])
    Test.assertSimilar(person._friends, people[i])
  }
};

let RandomTests = function(){
  for(let i=1;i<=100;i++){
    let person = Person();
    ec(person);
    let people = GetPeopleArray(i*3);
    let people2 = people.slice();
    person.fillFriends(people)
    Test.assertSimilar(person._friends, people2)
  }
};

NormalTests();
RandomTests();
  });
});