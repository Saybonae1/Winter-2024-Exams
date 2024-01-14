// fix and look
const skip = (array, ...elementsToR) => 
{
 
  const result = [];

  for (const value of array) 
  {
    
    if (!elementsToR.includes(value)) 
    {
      
      result.push(value);
      
    }
    
  }

  
  return result;
  
};

module.exports = skip;
