
// see the problem here: https://www.hackerrank.com/challenges/js10-bitwise/problem

function getMaxLessThanK(n, k) {
  let max = 0;
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      const temp = a & b;
      if ((temp < k) && (temp > max)) {
        max = temp;
      }
    }
  }
  return max;
}