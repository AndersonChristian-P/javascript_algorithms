// given a string return the character that is most commonly used in the string

// convert the string to an object where the keys of the object are the characters in the string and the values are the number of times that the character appears in the string

const maxChar = str => {
  const charMap = {}
  let max = 0
  let maxChar = ''

  // iterate over the source string with a "for of" loop and build out the character map

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  // for every character that we receive we will add an entry into charMap and if the entry already exists we will add 1 for the entry

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  // to iterate over the charMap object we us a "for in" loop (especially if it has key value pairs)

  return maxChar
}