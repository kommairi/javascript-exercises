const removeFromArray = function(arr, removed, removed_two, removed_three, removed_four) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === removed || arr[i] === removed_two || arr[i] === removed_three || arr[i] === removed_four){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
