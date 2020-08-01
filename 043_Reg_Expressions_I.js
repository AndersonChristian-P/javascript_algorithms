/*
Complete the function in the editor below by returning a RegExp object, re , that matches any string s that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

Constraints

The length of string s is >= 3.
String s consists of lowercase letters only (i.e., [a-z]).
Output Format

The function must return a RegExp object that matches any string s beginning with and ending in the same vowel.
*/

function regexVar() {

  /*
  * Declare a RegExp object variable named 're'
  * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
  */

  //  ^ => first item matches:
  // () => stores matching value captured within
  // [aeiou] => matches any of the characters in the brackets
  // . => matches any character:
  // + => for 1 or more occurrences (this ensures str length > 3)
  // \1 => matches to previously stored match. 
  // \2 looks for matched item stored 2 instances ago 
  // \3 looks for matched item stored 3 ago, etc

  //  $ ensures that matched item is at end of the sequence

  let re = /^([aeiou]).+\1$/;
  return re;
}