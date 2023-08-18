/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let j = 0;
  for (let i = 0; i < typed.length; i++) {
    const t = typed.charAt(i);
    if (j >= name.length) {
      if (name.charAt(j - 1) != t) return false;
      continue;
    }
    const n = name.charAt(j);
    if (n === t) {
      j++;
    } else if (name.charAt(j - 1) !== t) {
      return false;
    }
  }
  if (j < name.length) return false;

  return true;
};
const a = "saeed";
const b = "ssaeedd";

console.log(isLongPressedName(a, b));
