const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date) || isNaN(date))
    throw new Error('Invalid date!');

  const month = date.getMonth(); // Gets the month (0-based index)
  if (month === 11 || month <= 1)
    return 'winter';
  if (month <= 4)
    return 'spring';
  if (month <= 7)
    return 'summer';
  return 'autumn';
}

module.exports = {
  getSeason
};
