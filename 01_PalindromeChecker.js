// ==== 01. Palindrome Checker ====
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note:
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

// function palindrome(str) {
// 	let newStr = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
//   return newStr === newStr.split("").reverse().join("");
// }

// === Advanced Code Solution (most performant):
//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why. I just failed this in an interview.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    while ( str[front].match(/[\W_]/) ) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    while ( str[back].match(/[\W_]/) ) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++;
    back--;
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true;
}

// === Code Explanation:
// The simpler solutions perform very poorly on long strings because they operate on the whole string multiple times (toLowerCase(), replace(), split(), reverse(), join()) before comparing the whole string twice.

// The beauty of this solution is it never needs to read through the whole string, even once, to know that it’s not a palindrome. Why read through the whole string if you can tell that it’s not a palindrome just by looking at two letters?

// Uses a while loop instead of a for loop as a best practice - because we are using two variables, one is the index starting from the beginning of the string, and the other starts at the end of the string.

// console.log(palindrome("eye")); // should return true.
// console.log(palindrome("_eye")); // should return true.
// console.log(palindrome("race car")); // should return true.
// console.log(palindrome("not a palindrome")); // should return false.
// console.log(palindrome("A man, a plan, a canal. Panama")); // should return true.
// console.log(palindrome("never odd or even")); // should return true.
// console.log(palindrome("nope")); // should return false.
// console.log(palindrome("almostomla")); // should return false.
// console.log(palindrome("My age is 0, 0 si ega ym.")); // should return true.
// console.log(palindrome("1 eye for of 1 eye.")); // should return false.
// console.log(palindrome("0_0 (: /-\ :) 0-0")); // should return true.
// console.log(palindrome("five|\_/|four")); // should return false.
