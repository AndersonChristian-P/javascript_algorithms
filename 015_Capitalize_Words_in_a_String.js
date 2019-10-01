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

// --Logic
// Make an empty array 'words'
// Split the input string by spaces to get an array
// For each word in the array
  // Uppercase the first letter of the word
  // Join first letter with the rest of the string
  // Push result into 'words' array
// Join 'words' into string and return it