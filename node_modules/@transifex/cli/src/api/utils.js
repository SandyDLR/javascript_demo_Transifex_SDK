const _ = require('lodash');

/**
 * Convert a comma separated string to array of strings
 *
 * @param {String} string
 * @returns {String[]}
 */
function stringToArray(string) {
  string = (string || '').toString().trim(); // eslint-disable-line
  if (!string) return [];
  return _.compact(_.map(string.split(','), (entry) => entry.trim()));
}

/**
 * Merge arrays and remove duplicate values
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns
 */
function mergeArrays(array1, array2) {
  return _.uniq(_.concat(array1 || [], array2 || []));
}

/**
 * Normalize input to array format
 *
 * @param {*} value - Input that might be an array, string, or other type
 * @returns {Array} Normalized array
 */
function normalizeArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_e) {
      return [];
    }
  }
  return [];
}

/**
 * Async/await sleep
 *
 * @param {Number} msec
 * @return {Promise}
 */
function sleep(msec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, msec);
  });
}

module.exports = {
  stringToArray,
  mergeArrays,
  normalizeArray,
  sleep,
};
