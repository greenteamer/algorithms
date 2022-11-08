/** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
*/
const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = function (nums, target) {
  let result = [];
  nums.forEach((item, index) => {
    if (result.length > 0) {
      return;
    }
    if (target - item > 0) {
      nums.forEach((i, idx) => {
        console.log(`${item} + ${i}`);
        if (idx !== index && item + i === target) {
          console.log("condition");
          result = [item, i];
        }
      });
    }
  });
  return result;
};

console.log("two numbers: ", twoSum(nums, target), "\n");
