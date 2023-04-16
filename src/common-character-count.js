const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(one, two) {
  var map = new Map()
  for (let el of one) {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1)
  }

  var result = 0;

  for (let el of two){
    if (map.has(el) && map.get(el) > 0){
      map.set(el, map.get(el) -1);
    result++;
    }

  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};
