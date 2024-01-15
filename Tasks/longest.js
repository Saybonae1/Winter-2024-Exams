// Find longest string
//remove and fix and look
const findLongestString = (strings) => 
{
  
  let maxLength = -1;
  let longestString = '';

  for (const currentString of strings) 
  {
    
    if (currentString.length > maxLength) 
    {
      
      maxLength = currentString.length;
      longestString = currentString;
      
    }
  }
  
  return longestString;
};

module.exports = findLongestString;
