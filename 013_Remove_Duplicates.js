// -- Directions
// Remove all duplicates from an array. Only consider characters. Order
// does not matter.

// -- Examples
// removeDuplicates([1, 2, 3, 5, 2, 3]) --> [1, 2, 3, 5]

// Solution 1 - using a for loop
const removeDuplicates = arr => {
  const arr2 = []

  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i])
    }
  }

  return arr2
}

// Solution 2 - using .map()
const jobs = ['Web Developer', 'Marketing Manager', 'Project   Manager', 'Web Developer']

function getUnique(arr) {

  const final = []

  arr.map(e => !final.includes(e) && final.push(e))

  return final
}
console.log(getUnique(jobs))

// Solution 3 - using ES6 feature set()
const arr = [3, 5, 7, 3, 2, 5]

const noDuplicates = [...new Set(arr)]

console.log(noDuplicates)
