// Write a function:

//   function solution(A);

// that, given an array A of N integers, returns the smallest positive integer(greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

//   N is an integer within the range[1..100, 000];
// each element of array A is an integer within the range[−1, 000, 000..1, 000, 000].

function solution(A) {
  const set = new Set(A);

  let i = 1;

  while (set.has(i)) {
    i++;
  }

  return i;
}

// The new Set(), creates a new array with only the unique values of whatever you pass through it. 
// The while loop goes through the array and if set has the variable i return true and increment i.
// When variable i is an integer that returns false in the while statement return the value of i.
// The algorithm will stop once the value of i returns false in the while loop.

A = [-1, -3];

console.log(solution(A));