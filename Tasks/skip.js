// Return an remove without listed values
// added const
const Skip = ( T , ... Remove ) => {     
  const x = 0 ;   
  for  ( const C of T ) {    
    for  ( const X of Remove ) {    
      if (C === X) {
        T.splice(x, 1);
      }
    }
    x++;
  }
  return T;
};

module.exports = Skip;
