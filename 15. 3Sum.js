//  다사다난
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i > 0 && num === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = num + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        arr.push([num, nums[left], nums[right]]);
        while (nums[left] == nums[++left]);
        while (nums[right] == nums[--right]);
      }
    }
  }
  return arr;
};

// 시간초과 나오는 로직
// var threeSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   const set = new Set();
//   const arr = new Array();

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0)
//           set.add(JSON.stringify([nums[i], nums[j], nums[k]]));
//       }
//     }
//   }
//   set.forEach((element) => {
//     arr.push(JSON.parse(element));
//   });

//   return arr;
// };

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
