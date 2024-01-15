// Get one random element from an array
const getRandElement = (arr) => 
{
  
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
  
};

module.exports = getRandlement;
