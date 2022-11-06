var isSquare = function(arr){
    return arr.length ? arr.every(n => Number.isInteger(Math.sqrt(n))) : undefined;
  }