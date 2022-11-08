const printMatrix = require("./utils/print-matrix");

/** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
*/
let nums = Array.from({ length: 10000 }).map(() =>
  Math.floor(Math.random() * 100)
);

nums = [...nums, 120, 111];
const target = 231;

console.log("nums length: ", nums.length);

let count = 0;

const twoSum = function (nums, target) {
  let result = [];
  nums.forEach((item, index) => {
    if (result.length > 0) {
      return;
    }
    if (target - item > 0) {
      nums.forEach((i, idx) => {
        count++;
        if (idx !== index && item + i === target) {
          result = [index, idx];
        }
      });
    }
  });
  return result;
};

const t0 = performance.now();
console.log("two numbers: ", twoSum(nums, target), "\n");
const t1 = performance.now();
console.log(`Call took ${t1 - t0} milliseconds.`);
console.log("twoSum count: ", count);

let count2 = 0;

const twoSum2 = function (nums, target) {
  console.log(nums);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (result.length > 0 || nums[i] > target) {
      break;
    }
    count2++;

    const foundedIndex = nums.indexOf(target - nums[i]);
    if (~foundedIndex) {
      console.log(nums[i], nums[foundedIndex]);
      result[0] = i;
      result[1] = foundedIndex;
      break;
    }
  }

  return result;
};

const t2 = performance.now();
console.log("twoSum2: ", twoSum2(nums, target), "\n");
const t3 = performance.now();
console.log(`Call took ${t3 - t2} milliseconds.`);
console.log("twoSum2 count: ", count2);
