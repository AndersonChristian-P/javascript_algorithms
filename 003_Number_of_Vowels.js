// --Directions
// Write a function that returns the number of vowels used in a string. Vowels are
// characters 'a', 'e', 'i', 'o', and 'u'.

// --Examples
// vowels('Hi there') --> 3
// vowels('why do you ask?') --> 4
// vowels('Why?') --> 0

const vowels = ['a', 'e', 'i', 'o', 'u']

const findVowels = str => {
  let count = 0

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }

  return count
}
