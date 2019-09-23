// find the number of vowels in a string

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
