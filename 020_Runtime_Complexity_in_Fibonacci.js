// -- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where each number
// is the sum of the preceeding two.

// For example, the sequence
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first 10 entries of the fibonacci series.

// -- Example
//    fib(4) === 3


// ----Iterative Solution----
const fib = n => {

  const result = [0, 1]
  // this is the trick, you will always have 0 and 1 in the fibonacci sequence

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1]
    const b = result[i - 2]

    result.push(a + b)
  }

  return result[result.length - 1]

}

// -- Logic
// create an array that will hold our series of numbers
// return the nth element

// -- Runtime Complexity
// Cerebral academic approach
// For every increase in n we have to calculate one additional number - this will never change - linear runtime

// Shortcut way
// We have an iterative for loop that loops over a closed set - chances are we have linear runtime

//  ----Recursive Solution----

const fib = n => {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

// -- Logic
// best way to look at this is by using a diagram

// -- Runtime Complexity
// It's very slow