/*
Complete the function that accepts a string parameter, and reverses each word in 
the string. All spaces in the string should be retained.

Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


function reverseWords(str) {
  let strArr = str.split(' ');
  strArr.forEach((word, ind) => {
    strArr[ind] = word.split('').reverse().join('');
  })
  return strArr.join(' ');
}