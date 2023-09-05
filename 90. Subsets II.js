/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let map = {};
  const arr = [];
  let tempArr = makeArray(nums);
  tempArr.forEach((item) => {
    const arrayToString = JSON.stringify(item);
    if (map[arrayToString] === undefined) {
      map[arrayToString] = 1;
      arr.push(item);
    }
  });

  return arr;
};

const makeArray = (arr) => {
  if (arr.length === 0) return [[]];
  else {
    const num = arr[0];
    let brr = makeArray(arr.slice(1));
    let mapArr = brr.map((crr) => [num, ...crr].sort());
    return [...brr, ...mapArr];
  }
};

console.log(subsetsWithDup([1, 2, 2]));
