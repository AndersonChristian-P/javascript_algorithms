// Generate a random number within a given range

randomRange = (myMin, myMax) => {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(2, 19));