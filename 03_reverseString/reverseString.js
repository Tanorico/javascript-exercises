const reverseString = function(string) {
  const tempArray = string.split("");
  const doneString = [];
  for (i = string.length; i >= 0; i--){
    doneString.push(tempArray[i]);
  }
  return doneString.join("");
};

// Do not edit below this line
module.exports = reverseString;
