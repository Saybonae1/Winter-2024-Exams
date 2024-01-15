// Split string by the first occurrence of separator
// fix and rename
const parseIp = (givStr) => {
  let finalArr = [];
  if (givStr === '') return;
  else {
    let splitArr = givStr.split('.');
    if (splitArr.length != 4) return;
    let index = 0;
    for (const element of splitArr) {
      finalArr[index] = parseInt(element);
      if (isNaN(finalArr[index])) return;
      index++;
    }
  }
  return finalArr;
};

module.exports = parseIp;
