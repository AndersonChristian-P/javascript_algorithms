// code the fibonacci sequence

const fibonacci = number => {
  if (number <= 0) {
    return `The argument must be greater than 0`
  }

  if (number === 1) {
    return [0, 1]
  } else {
    var sequence = fibonacci(number - 1)

    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])

    return sequence
  }
}

console.log(fibonacci(5))

// this is a recursive function
  // it contains a termination condition
  // it contains a base case
  // it contains the recursion