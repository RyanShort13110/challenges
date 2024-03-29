<!-- Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior" -->


<!-- solution -->

<?php 

function reverseWords($str){
  $str_arr = explode("-", $str);
  foreach($str_arr as $i => &$word){
    if($i === 0) {
      $word = strtolower($word);
    } else {
      $word = ucfirst($word);
    }
  }
  echo implode("", $str_arr);
}

// reverseWords('These are some more words');
