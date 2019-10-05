// --Directions
// Write a function that accepts a positive number N. The function should console
// log a pyramid shape with N levels using the # character. Make sure the pyramid has
// spaces on both the left and right hand sides.

// --Examples
// pyramid(1)
//    '#'
// pyramid(2)
//    ' # '
//    '###'

// --Logic
// From 0 to n (iterate through rows)
// Create an empty string, 'level'
// From 0 to ??? (columns)
// IF the column should have a #
// Add a '#' to 'level'
// ELSE
// Add a space to 'level'
// console log 'stair'


const pyramid = n => {

  const midpoint = Math.floor((2 * n - 1) / 2)

  for (let row = 0; row < n; row++) {
    let level = ''

    for (let column = 0; column < (2 * n - 1); column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#'
      } else {
        level += ''
      }
    }

    console.log(level)
  }
}

pyramid(3)