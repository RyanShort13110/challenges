/*
We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe

*/


// solution

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = `${this.firstName} ${this.lastName}`;
  return this.name
}


// test cases

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var n = new NameMe('John', 'Doe');
Test.expect((typeof n.firstName != undefined && n.firstName == "John"), "Verifying First name. Object returned should contain the firstname: John");
Test.expect((typeof n.lastName != undefined && n.lastName == "Doe"), "Verifying Last name. Object returned should contain the lastname: Doe");
Test.expect((typeof n.name != undefined && n.name == "John Doe"), "Verifying full name. Object returned should contain full name: John Doe");
n = new NameMe('Johnny', 'Bravo');
Test.expect((typeof n.firstName != undefined && n.firstName == "Johnny"), "Verifying First name. Object returned should contain the firstname: Johnny");
Test.expect((typeof n.lastName != undefined && n.lastName == "Bravo"), "Verifying Last name. Object returned should contain the lastname: Bravo");
Test.expect((typeof n.name != undefined && n.name == "Johnny Bravo"), "Verifying full name. Object returned should contain full name: Johnny Bravo");
n = new NameMe('Jack', 'Sparrow');
Test.expect((typeof n.firstName != undefined && n.firstName == "Jack"), "Verifying First name. Object returned should contain the firstname: Jack");
Test.expect((typeof n.lastName != undefined && n.lastName == "Sparrow"), "Verifying Last name. Object returned should contain the lastname: Sparrow");
Test.expect((typeof n.name != undefined && n.name == "Jack Sparrow"), "Verifying full name. Object returned should contain full name: Jack Sparrow");

  });
});