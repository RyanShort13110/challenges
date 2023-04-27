/*
Task Description

You're re-designing a blog, and the blog's posts have the Weekday Month Day, time 
format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a 
shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and 
returns the shortened format.

Input will always be a string, e.g., "Friday May 2, 7pm". 

Output will be the shortened string, e.g., "Friday May 2".
*/


// solution

function shortenToDate(longDate){
  let dateArr = longDate.split(' ')
  return `${dateArr[0]} ${dateArr[1]} ${dateArr[2].slice(0, -1)}`
}


// test cases

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(shortenToDate("Monday February 2, 8pm"), "Monday February 2");
Test.assertEquals(shortenToDate("Tuesday May 29, 8pm"), "Tuesday May 29");
Test.assertEquals(shortenToDate("Wed September 1, 3am"), "Wed September 1");


for(let i = 0; i < 31; i++) {

  let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let times = ["1am","2pm","3pm","10am","11pm","12am"];
  
  let inputDays = daysOfWeek[Math.floor(Math.random()*daysOfWeek.length)]; 
  let inputMonths = months[Math.floor(Math.random()*months.length)]; 
  let inputTimes = times[Math.floor(Math.random()*times.length)]; 
  let input = inputDays + " " + inputMonths + " " + i + ", " + inputTimes;
  let output = inputDays + " " + inputMonths + " " + i;

  Test.assertEquals(shortenToDate(input), output);
}
  });
});