const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(args) {
  var result = 0;
  for (let el of args){
    console.log(el)
    for (let insideEl of el){
      console.log(insideEl)
      if (insideEl == '^^')
      result++;
    }
  }
  return result;
}

countCats([
   [0, 1, '^^'],
   [0, '^^', 2],
   ['^^', 1, 2]
 ])


module.exports = {
  countCats
};
