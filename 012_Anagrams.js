// -- Directions
// Check to see if two provided strings are anagrams of each other
// One string is an anagram of another it it uses the same characters in the
// same quantity. Only consider characters, not spaces or punctuations.
// Consider capital letters to be the same as lower case letters

// -- Examples
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL SAFETY', 'fairy tales') --> True
// anagrams('Hi there', 'bye there') --> False


// create a helper function that builds a character map
buildCharMap = str => {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, "".toLowerCase)) {
    if (!charMap[char]) {
      charMap[char] = 1
    } else {
      charMap[char]++
    }
  }

  return charMap
}
// the regex above says anytime we find a character that isn't a number or a
// capital case or lower case letter replace it with nothing


const anagrams = (stringA, stringB) => {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  return true
}

// Object.keys() method returns an array of a given object's own enumerable
// property names, in the same order as we get with a normal loop

// --Logic
