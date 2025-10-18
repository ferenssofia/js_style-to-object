'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const items = sourceString.split(';');

  for (let item of items) {
    item = item.trim();

    if (!item) {
      continue;
    }

    if (!item.includes(':')) {
      continue;
    }

    const [property, ...valueParts] = item.split(':');

    const key = property.trim();
    const value = valueParts.join(':').trim();

    result[key] = value;
  }

  return result;
}
convertToObject('lox: pedalnii; kuk: navigator');

module.exports = convertToObject;
