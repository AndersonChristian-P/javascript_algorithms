// -- Directions

// Calculate the factorial of a number


const factorialize = num => {
  let factorialTotal = num;

  if (num < 0) {
    return "Please provide a number >= 0";
  }

  if (num === 0) {
    return 1;
  }

  for (let i = 1; i < num; i++) {
    factorialTotal *= i;
  }

  return factorialTotal;
}

console.log(factorialize(5));
