/* Messi is a soccer player with goals in three leagues:

    LaLiga
    Copa del Rey
    Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid. */


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


// test cases

describe('goals test', function () {
  it('should be 0', function () {
    Test.assertEquals(goals(0,0,0), 0)
  })
  it('should be 58', function () {
    Test.assertEquals(goals(43, 10, 5), 58)
  })
  it('should work for random numbers', function () {
    let solution = (ll, cl, cdr) => ll + cl + cdr
    for (let i = 0; i < 100; i++) {
      let l = Math.floor(Math.random()*50);
      let c = Math.floor(Math.random()*20);
      let r = Math.floor(Math.random()*10);
      Test.assertEquals(solution(l, c, r), goals(l, c, r))
    }
  })
})