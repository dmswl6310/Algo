// 미완
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const set = new Set();
  const arr = new Array();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0)
          set.add(JSON.stringify([nums[i], nums[j], nums[k]]));
      }
    }
  }
  set.forEach((element) => {
    arr.push(JSON.parse(element));
  });

  return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
