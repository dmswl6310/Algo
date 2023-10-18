/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const lowerStr = s.toLowerCase();
  let alphaStr = "";

  [...lowerStr].forEach((str) => {
    if ((str >= "a" && str <= "z") || (str >= "0" && str <= "9")) {
      alphaStr += str;
    }
  });
  const size = alphaStr.length;
  const ban = parseInt(size / 2);

  if (
    alphaStr.substring(0, ban) ===
    [...alphaStr].reverse().join("").substring(0, ban)
  ) {
    return true;
  }
  return false;
};
console.log(isPalindrome("0P"));
