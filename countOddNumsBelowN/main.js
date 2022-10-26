/* Given a number n, return the number of positive odd numbers below n, EASY!

 Examples (Input -> Output)

7 returns 3 (because all the odd numbers below 7 are [1, 3, 5])

15 returns 7 (because all the odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13] 
*/


function oddCount(n){
  for(let i = 1; i <= n; i++){
    if(!(i % 2)){
      return Math.floor(n / i);
    }
  }
}

oddCount(15);