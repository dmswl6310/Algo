/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let size = Math.floor(nums.length / 2);
  let numArr = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    const key = num.toString();
    if (numArr[key] == undefined) {
      numArr[key] = 1;
    } else if (numArr[key] >= 1) {
      numArr[key]++;
    }
    if (numArr[key] > size) {
      return num;
    }
  }
};

console.log(majorityElement([1]));
