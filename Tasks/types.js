// Count types in an array
//look
const types = function (lst) 
{
  
  const types = 
      {
        
    number: 0,
    string: 0,
    boolean: 0,
        
      };
  
  for (const element of lst) 
  {
    
    const elType = typeof element;
    types[elType]++;
    
  }
  return types;
  
};

module.exports = types;
