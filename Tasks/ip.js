// rebname and fix
const parseIp = (givenStr) => {
  const splitArr = givenStr.split('.');
  const length = splitArr.length;
  if (length !== 4) return;
  const finalArr = [];

  for (let i = 0; i < length; i++) {
    finalArr[i]  = parseInt(splitArr[i]);
    if (isNaN( finalArr[i])) return;
  }

  return finalArr;
};

module.exports = parseIp;
