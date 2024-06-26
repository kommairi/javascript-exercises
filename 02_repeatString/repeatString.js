const repeatString = function(string, num) {
  let text = string;
  if(num == 0){
    return "";
  }
  else if(num < 0){
    return "ERROR";
  }
  else
  for(i = 0; i < num - 1; i++){
    text += string;
  }
  return text;
};

// Do not edit below this line
module.exports = repeatString;
