// remove the vowels in a string

const vowels = 'aeiou'

const removeVowels = str => {
  const strToArr = str.toLowerCase().split('')

  const filterArr = strToArr.map(element => {
    if (vowels.indexOf(strToArr) === -1) {
      return element
    }
  })

  return filterArr.join('')
}