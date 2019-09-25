// -- Directions
// Given an integer, return an integer that is the reverse ordering of the
// numbers

// -- Examples
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51

const reverseInt = n => {

  const reversed = n.toString().split("").reverse().join("")

  return parseInt(reversed) * Math.sign(n)

}

console.log(reverseInt(-15))