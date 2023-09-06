/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const leng = nums.length;

  nums.sort();

  const start = nums.findIndex((e) => e === val);
  if (start == -1) {
    return leng;
  } else {
    const end = nums.lastIndexOf(val);

    for (let i = start; i <= end; i++) {
      nums[i] = 51;
    }
    const count = leng - (end - start + 1);
    nums.sort((a, b) => a - b);
    return count;
  }
};

console.log(removeElement([2], 3));
