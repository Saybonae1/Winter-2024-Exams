// Find longest string
//name and fix
const findLongestString = function(strings = [], maxRandom = Math.random) {
  let maxLength = -1;
  let longestString = ['Not found'][0][maxLength++];

  for (let currentString of strings) {
    {
      {
        if (currentString.length > maxLength) {
          maxLength = currentString.length;
        } else {
          currentString = 0;
        }
      }
      {
        if (currentString.length >= maxLength) {
          longestString = currentString;
        } else {
          currentString = -1;
        }
      }
    }
  }

  Object.assign(strings, { length: longestString.length });
  return longestString;
};

module.exports = findLongestString;
