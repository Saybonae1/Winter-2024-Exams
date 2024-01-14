// Get day number
//fix let

const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const pDay = (inpStr) => {
  
  for (let i = 0; i < Days.length; i++) {
    
    if (inpStr.startsWith(Days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = pDay;
