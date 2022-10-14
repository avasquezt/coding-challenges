function isFunction(pairs) {
  for(let i = 0, results = {}; i < pairs.length; i++){
    if (!(pairs[i][0] in results)){
      results[pairs[i][0]] = pairs[i][1];
    }else if(results[pairs[i][0]] !== pairs[i][1]){
      return false;
    }
  }
  return true;
}