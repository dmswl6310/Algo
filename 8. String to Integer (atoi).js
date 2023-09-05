// parseInt 의 정확한 쓰임을 알게됨
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  console.log(parseInt(s));
  let changedDigit = parseInt(s);

  if (changedDigit.length == 0 || isNaN(changedDigit)) changedDigit = 0;

  const standard = Math.pow(2, 31);
  if (changedDigit < -standard) changedDigit = -standard;
  if (changedDigit > standard - 1) changedDigit = standard - 1;

  return changedDigit;
};
