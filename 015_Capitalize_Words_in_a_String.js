// -- Directions
// Capitalize all the words in a string

// -- Examples
// capitalizeWords('where did you go') --> Where Did You Go
// capitalizeWords('my name is chris') --> My Name Is Chris

const capitalizeWords = str => {
  const words = []

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(" ")
}

console.log(capitalizeWords("where did you go")) 