// check to see if 2 strings are anagrams of each other
// only consider characters and not spaces or punctuations


// create a helper function

const buildCharMap = str => {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, "".toLowerCase)) {
    if (!charMap[char]) {
      charMap[char] = 1
    } else {
      charMap[char]++
    }
  }

  // the regex above says anytime we find a character that isn't a number or a capital case or lower case letter replace it with nothing
  return charMap
}


const anagrams = (str1, str2) => {
  const aCharMap = buildCharMap(str1)
  const bCharMap = buildCharMap(str2)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }

  return true

}

console.log(anagrams('listen', 'silent'))