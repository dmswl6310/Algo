/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let maxNum = -1;
  let map = {};
  map[maxNum] = -1;

  nums.forEach((num) => {
    if (num % 2 == 0) {
      if (map[num] === undefined) {
        map[num] = 1;
      } else {
        map[num]++;
      }
      if (map[num] > map[maxNum]) {
        maxNum = num;
      } else if (map[num] === map[maxNum]) {
        maxNum = Math.min(maxNum, num);
      }
    }
  });
  return maxNum;
};

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
