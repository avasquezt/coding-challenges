function partlist(arr) {
  let ans = [];
  for(let i = 1; i < arr.length; i++){
    ans.push([arr.slice(0, i).join(' '), arr.slice(i - arr.length).join(' ')])
  } 
  return ans;
}