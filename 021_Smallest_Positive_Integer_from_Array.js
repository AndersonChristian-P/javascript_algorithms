// --Directions
// Write a function that, given an array A of N integers, returns 
// the smallest positive integer (greater than 0) that does not occur 
// in A.

// --Examples
// solution([1, 3, 6, 4, 1, 2]) --> 5
// solution([1, 2, 3]) --> 4
// solution([-1, -3]) --> 1

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range[1..100, 000];
// each element of array A is an integer within the range[−1, 000, 000..1, 000, 000].



const solution = A => {

  const set = new Set(A);
  let i = 1

  console.log(set)

  while (set.has(i)) {
    i++
  }

  return i
  // by default 'i' equals 1
}

console.log(solution([5, 3, 7]))

