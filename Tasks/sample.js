// Get one random element from an array
// name and fix
const getRandElement = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = getRandlement;
