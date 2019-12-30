// remove the vowels in a string

const vowels = 'aeiouAEIOU'

const removeVowels = str => {
  const strToArr = str.split('')

  const filterArr = strToArr.map(element => {
    if (vowels.indexOf(element) === -1) {
      return element
    }
  })

  return filterArr.join('')
}

console.log(removeVowels('Christian'));