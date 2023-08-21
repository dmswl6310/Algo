/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const arr = Array.from(Array(rowIndex + 1), () =>
    new Array(rowIndex + 1).fill(null)
  );
  for (let i = 0; i <= rowIndex; i++) {
    arr[i][0] = 1;
    let mid = parseInt(i / 2);
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
    arr[i][i] = 1;
  }
  return arr[rowIndex];
};

console.log(getRow(3));
