// Copy all listed keys from dictionary

// look and fix
const copyK = (DX, ...keys) =>
{

  const resDX = {};
  const objKeys = Object.keys(DX);
  for (const key of objKeys)
  {

    if (keys.includes(key))
    {

      resDX[key] = DX[key];
    }

  }
  return resDX;

};

module.exports = copyK;
