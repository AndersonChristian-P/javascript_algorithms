// create the sentence "On my way to Techtonic!" using the following object

const wordObj = {
  space: " ",
  punctuation: "!",
  letterBank: {
    pairedLetters: { one: "my", two: "ch", three: "" },
    singleLetters: { one: "t", two: "n", three: "" },
    vowels: ['a', 'e', 'i', 'o', 'u']
  },
  wordBank: { one: "way", two: "tonic" }
}

const makeSentence = () => {

  return (wordObj.letterBank.vowels[3].toUpperCase() + wordObj.letterBank.singleLetters.two + wordObj.space + wordObj.letterBank.pairedLetters.one + wordObj.space + wordObj.wordBank.one + wordObj.space + wordObj.letterBank.singleLetters.one + wordObj.letterBank.vowels[3] + wordObj.space + wordObj.letterBank.singleLetters.one.toUpperCase() + wordObj.letterBank.vowels[1] + wordObj.letterBank.pairedLetters.two + wordObj.wordBank.two + wordObj.punctuation);

}

console.log(makeSentence());