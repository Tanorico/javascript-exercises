const removeFromArray = function() {
    let testArray = arguments[0];
    let returnArray = [];
    
    for (i = 0; i < testArray.length; i++){
      let deleteChar = false; 
      for (j = 1; j < arguments.length; j++){
          if (testArray[i] === arguments[j]){
              deleteChar = true;
          }    
      }
      if (!deleteChar){
          returnArray.push(testArray[i]);
      }
    }
  
  
    return returnArray;
  };
  
  console.log(removeFromArray([1, 2, 23, 324, 4], 324,1));
  
  // Do not edit below this line
  module.exports = removeFromArray;