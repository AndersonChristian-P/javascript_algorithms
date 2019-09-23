// forEach() executes a provided function once for each element in the array

let zooAnimals = ['lion', 'tiger', 'bear', 'otter']

const haveTiger = () => {
  const zooHasTiger = false

  zooAnimals.forEach(animal => {
    if (animal === 'tiger') {
      zooHasTiger = true
    }
  })

  return zooHasTiger
}

console.log(haveTiger()) // returns true


// map() creates a new array with the results of calling a provided function on every element in the calling array

let arr1 = [1, 4, 9, 16]

const map1 = arr1.map(element => element * 2)

console.log(map1) // returns [2, 8, 18, 32]


// filter() creates a new array with all elements that pass the test implemented by the provided function

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const results = words.filter(element => element.length > 6)

console.log(results) // returns ["exuberant", "destruction", "present"]