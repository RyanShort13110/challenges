/*
Classy Extensions
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update 
introducing extends keyword. You will be preloaded with the Animal class, so you 
should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the 
speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

The name attribute is passed with this.name (JS), @name (Ruby) or self.name 
(Python).
*/


// solution

class Cat extends Animal {
  speak(){
    return `${this.name} meows.`;
  }
}


// test cases

const { assert } = require('chai');

describe("Cat tests", () => {
  it('Fixed Tests', () => {
    let cat = new Cat('Mr Whiskers');
    assert.strictEqual(cat.speak(),'Mr Whiskers meows.')
    assert.instanceOf(cat, Animal, "Your class should extend the Animal class");
    cat = new Cat('Lamp');
    assert.strictEqual(cat.speak(),'Lamp meows.')
    cat = new Cat('$$Money Bags$$');
    assert.strictEqual(cat.speak(),'$$Money Bags$$ meows.')
  });

  
  it('Random Tests', () => {
    const names = ['Mr Whiskers', 'Lamp', '$$Money Bags$$', 'meowmeow',
    'mirou','milo','spots','dog','llama','code','wars',
    'stripes','dug','barf'];
    for(let i=0;i<50;i++){
      let name = names[Math.floor(Math.random()*names.length)];
      let cat = new Cat(name);
      assert.strictEqual(cat.speak(),`${name} meows.`);
      assert.instanceOf(cat, Animal, "Your class should extend the Animal class");
    }
  });

  it('Animal Test', () => {
    let animal = new Animal('noise');
    assert.strictEqual(animal.speak(), 'noise makes a noise.');
  });
});