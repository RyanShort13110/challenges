/*
Description:

When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

*/

// solution
function swap (string) {
  let strArr = string.split('');
  strArr.forEach((letter, i) => {
    if(letter == 'a' || 
       letter == 'e' || 
       letter == 'i' || 
       letter == 'o' || 
       letter == 'u'){
      strArr[i] = letter.toUpperCase();
    }
  })
  return strArr.join('');
}


// test cases
const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
	const actual = swap(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", () => {
	it("sample tests", () => {
		doTest("", "");
		doTest("   @@@", "   @@@");
		doTest("HelloWorld!", "HEllOWOrld!");
		doTest("Sunday", "SUndAy");
		doTest("Codewars", "COdEwArs");
		doTest("Monday", "MOndAy");
		doTest("Friday", "FrIdAy");
		doTest("abracadabra", "AbrAcAdAbrA");
		doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
		doTest("ABRACADABRA", "ABRACADABRA");
		doTest("aBRaCaDaBRa", "ABRACADABRA");
	});

	const rnd = x => ~~(Math.random() * x);
	const rndOf = xx => xx[rnd(xx.length)];
	const rndCase = x => x["to"+ (rnd(99) > 50 ? "Upper" : "Lower") + "Case"]();
	const VOWS = "aeiouaeiuo", CONS = "bcdfghjklmnpqrstvwxyz";

	it('random tests', () => {
		for (let i = 0; i < 100; i++) {
			let len = rnd(25) + 5;
			let input = "", expected = "";

			while (len--) {
				const char = rndCase(rndOf(VOWS + CONS));
				expected += /[aeiou]/.test(char) ? char.toUpperCase() : char;
				input += char;
			}
			doTest(input, expected);
		}
	});
});