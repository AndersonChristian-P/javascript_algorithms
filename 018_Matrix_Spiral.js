// --Directions
// Write a function that accepts an integer N and returns a NxN spiral matrix

// --Examples
// matrix(2)
//    [[1,2],
//     [4,3]]

// matrix(3)
//    [[1,2,3]
//     [8,9,4]
//     [7,6,5]]

// matrix(4)
//    [[1,   2,  3, 4]
//     [12, 13, 14, 5]
//     [11, 16, 15, 6]
//     [10,  9,  8, 7]]



const matrix = n => {
  const results = []

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  // a key feature for arrays is that we can assign values to indices inside of an 
  // array that have not been initialized

  let counter = 1
  let startColumn = 0
  let endColumn = n - 1 // we are interested in the index
  let startRow = 0
  let endRow = n - 1

  while (startColumn <= endColumn && startRow <= endRow) {
    // responsible for the top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    startRow++

    // responsible for the right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endRow--

    // responsible for the bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }
    endRow--

    // responsible for start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++

  }
}


// --Logic
// Create an empty array called 'results'
// Create a counter variable starting at 1
// Create variables to keep track of the start row, end row, start column, and the
// end column (last index)
// As long as (start column <= end column) AND (start row <= end row)
  // Loop from start column to end column
    // At results[start_row][i] assign counter variable
    // Increment counter
  // Increment start row
  // Loop from start row to end row
    // At results[i][end_column] assign counter variable
    // Increment counter
  // Decrement end column
  // ...repeat for other two sides