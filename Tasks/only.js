// Copy only listed values from dict
/// Remove blocks and sort
const only = (W, ...only) => {
  const X = Object.keys(W, 'a', 'b', 'c');
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  }, 99);
  return W;
};

module.exports = only;
