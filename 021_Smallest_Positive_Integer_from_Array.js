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

  // const noDuplicates = [...new Set(A)]

  // const sortedArr = noDuplicates.sort()

  // let numOfNeg = 0

  // for (let i = 0; i < sortedArr.length; i++) {
  //   if (noDuplicates[i] <= 0) {
  //     numOfNeg++
  //   }

  //   if (numOfNeg === sortedArr.length) {
  //     return 1
  //   }
  // }


  // for (let i = 1; i < sortedArr.length; i++) {
  //   if (sortedArr[i] - sortedArr[i - 1] !== 1) {
  //     return sortedArr[i - 1] + 1
  //   }
  // }

  const set = new Set(A);
  let i = 1;

  console.log(set)

  while (set.has(i)) {
    i++;
  }

  return i;
}

console.log(solution([5, 3, 7]))

