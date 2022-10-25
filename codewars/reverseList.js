reverse = function(array) {
    let result = [];
    for(let val of array){
      result.unshift(val);
    }
    return result;
  }