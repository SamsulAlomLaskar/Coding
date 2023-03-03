/*
! Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

? You may assume that each input would have exactly one solution, and you may not use the same element twice.

* You can return the answer in any order.

! Example 1:

? Input: nums = [2,7,11,15], target = 9
* Output: [0,1]
! Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

//* ====================Method 1===================================
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

let res = twoSum([2, 7, 11, 15], 9);
console.log("Output 1", res);

//* ====================Method 2===================================

let array = [2, 7, 11, 15];
const target = 9;
let tempAry = [];
const result = array.reduce((prev, curr, ind, arr) => {
  if (prev + curr === target) {
    tempAry.push(arr.indexOf(prev), arr.indexOf(curr));
  }
  return tempAry;
});

console.log("Output 2", result);

//* ====================Method 3===================================

let tempAryNew = [];
let tempVar;
const twoSumNew = function (nums, target) {
  tempVar = nums.reduce((prev, curr, _, arr) => {
    if (prev + curr === target) {
      tempAryNew.push(arr.indexOf(prev), arr.indexOf(curr));
    }
    return tempAryNew;
  });
};

twoSumNew([2, 7, 3, 9], 9);
console.log("Output 3", tempVar);
