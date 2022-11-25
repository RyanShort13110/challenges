// Your task is to create a function that takes in an array of numbers. 
// Multiply each number together and alert the product. 

function multiplyAll(arr){
  let product = 1
  arr.forEach(num => num *= product)
  alert(product)
}
