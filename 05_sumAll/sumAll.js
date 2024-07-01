const sumAll = function(var_1, var_2) {
  let sum = 0;
  if ( var_1 < 0 || var_2 < 0 || isNaN(var_1) || isNaN(var_2) || typeof var_2 !== 'number'){
    return "ERROR";
  }

  else if(var_1 >= var_2){
    for(let i = var_2; i <= var_1; i ++){
      sum += i;
    }
    return sum;
  }
  else if(var_2 >= var_1){
    for(let i = var_1; i <= var_2; i++){
      sum += i;
    }
    return sum;
  }



};

// Do not edit below this line
module.exports = sumAll;
