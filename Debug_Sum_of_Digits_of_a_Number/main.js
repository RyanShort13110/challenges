/*
Debug Sum of Digits of a Number
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example...
123  => 6
223  => 7
1337 => 14
*/

function getSumOfDigits(integer) {
  let arr = integer.toString().split('')
  return arr.reduce((acc, curr) => acc + Number(curr), 0)
}