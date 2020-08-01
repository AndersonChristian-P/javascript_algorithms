/*
Create a function that has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums
*/


const getSecondLargest = nums => {
  newArr = []
  maxFirst = Math.max(...nums)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != maxFirst) {
      newArr.push(nums[i])
    }
  }

  return Math.max(...newArr)
}

console.log(getSecondLargest([1, 3, 6, 6, 7]))