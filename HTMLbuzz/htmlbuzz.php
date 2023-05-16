/*
Your task is simple, write a function that will count from 1 to 100. If the 
count is divisible by 3, echo an h1 element that contains the word 'Fizz'. If 
count is divisible by 5, echo an h2 element that contains the text 'Buzz'. If 
count is divisible by both 3 and 5, echo an h3 that says 'FizzBuzz'!
*/

<?php
  function fizzBuzz($num){
    $output = array();

    for($i = 1; $i <= $num; $i++){
      if(($i % 3 == 0) && ($i % 5 == 0)){
        $output[] = "<h3>Fizzbuzz</h3>";
      }else if($i % 3 == 0){
        $output[] = "<h1>Fizz</h1>";
      }else if($i % 5 == 0){
        $output[] = "<h2>Buzz</h2>";
      }else{
        $output[] = $i;
      }
    }
    echo implode("<br>", $output);
  }

  # fizzBuzz(100);
?>