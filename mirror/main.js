const mirror = obj => {
  let ans = {};
  for (let key in obj){
    ans[key] = key.split('').reverse().join('');
  }
  return ans;
};