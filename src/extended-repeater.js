const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(word, args) {
  var result = '';
  let repeatTimes = args.repeatTimes;
  let addition = args.addition;
  let main_separator = args.separator;
  let additionRepeatTimes = args.additionRepeatTimes;
  let additionSeparator = args.additionSeparator;
  for (let i = repeatTimes; i > 0; i--) {
    result = result.concat(word);
    for (let j = additionRepeatTimes; j > 0; j--) {
      result = result.concat(addition);
      if (j != 1) result = result.concat(additionSeparator);
      console.log(j)
    }
    if (i != 1) result = result.concat(main_separator);
  }
  return result;
}

console.log(
  repeater('TESTstrADD!', {
    repeatTimes: 1,
    separator: '**',
    addition: 'PLUS',
    additionRepeatTimes: 0,
    additionSeparator: '00',
  })
);

module.exports = {
  repeater,
};
