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
function countCats(matrix) {
  let count = [];
  for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].includes('^^')) {
      const a = matrix[i].filter((cat) => cat === '^^');
      count.push(a);
      }
  }
  count = [].concat.apply([], count);
  return count.length;
}

module.exports = {
  countCats
};
