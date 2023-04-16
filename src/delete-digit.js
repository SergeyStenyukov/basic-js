const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(input) {
  var set = new Set();
  var string = '' + input;
  for (let i = 0; i < string.length; i++) {
    var newNumber = '';
    for (let j = 0; j < string.length; j++) {
      if (i == j) {
        newNumber.concat('');
      } else {
        newNumber += string.charAt(j);
      }
    }
    set.add(newNumber);
  }
    return Math.max(...set);
}

module.exports = {
  deleteDigit,
};
