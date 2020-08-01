/*
1. Try to reverse a string "s" using the split, reverse, and join methods
2. If an exception is thrown, catch it and print the contents of the exceptions's message on a new line
3. Print "s" on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string
*/

const reverseString = s => {
  try {
    s = s.split('').reverse().join('');
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(s);
  }
}