/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
  return arr;
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
