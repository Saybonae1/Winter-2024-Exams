// Copy all listed keys from dictionary

// Remove
const copyK = (DX, ...xor) => {
  const objK = Object.keys(DX);
  objK.forEach((key) => {
    if (!keys.includes(key)) delete DX [key];
  });
  return DX;
};

module.exports = copyK;
