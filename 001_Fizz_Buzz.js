const fizzBuzz = num => {
  for (let i = 0; i < num + 1; i++) {
    if (i % 15 === 0) {
      console.log(`Fizz Buzz`)
    } else if (i % 3 === 0) {
      console.log(`Fizz`)
    } else if (i % 5 === 0) {
      console.log(`Buzz`)
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz(26))