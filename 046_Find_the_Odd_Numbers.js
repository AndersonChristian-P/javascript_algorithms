// Given two integers, l and r, print all the odd numbers between l and r (l and r inclusive)

function findOddNumbers(l, k) {
  let newArr = [];
  let oddArr = [];

  for (let i = l; i <= k; i++) {
    newArr.push(i);
  }

  for (let j = 0; j <= newArr.length - 1; j++) {
    if (newArr[j] % 2 != 0) {
      oddArr.push(newArr[j]);
    }
  }

  return oddArr;
}

console.log(findOddNumbers(2, 5));