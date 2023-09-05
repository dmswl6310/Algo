/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  let size = nums.length;
  let j = 1;

  for (let i = 0; i < size; i++) {
    if (nums[i] !== val && nums[i] !== "-") {
      count++;
    } else {
      for (; j < size; j++) {
        if (nums[j] !== val && nums[i] !== "-") break;
      }
      nums[i] = nums[j];
      nums[j++] = "-";
    }
  }

  return count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
