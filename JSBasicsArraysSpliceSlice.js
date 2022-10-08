function threeInOne(arr){
    let ans = [];
    for(let i = 0; i < arr.length; i+=3){
      ans.push(arr.slice(i, i + 3).reduce((acc, n) => acc + n, 0));
    }
    return ans;
  }