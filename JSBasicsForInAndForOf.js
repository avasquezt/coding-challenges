function giveMeFive(obj){
    let ans = [];
    for(let key in obj){
      if (key.length == 5 ){
        ans.push(key);
      }
      if (obj[key].length == 5){
        ans.push(obj[key]);
      }
    }
    return ans;
  }