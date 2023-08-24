/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let increase = true;
  let flag = false;
  if (arr.length <= 2) return false;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (i != 0) {
      if (increase) {
        if (arr[i - 1] > num) {
          if (!flag) return false;
          else increase = false;
        } else if (arr[i - 1] == num) return false;
        else flag = true;
      } else {
        if (arr[i - 1] <= num) return false;
      }
    }
  }
  if (increase) return false;
  return true;
};

console.log(validMountainArray([3, 5, 5]));
