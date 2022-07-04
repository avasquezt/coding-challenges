function sumGroups(arr) {
  //coding and coding..
  let lastCase, ans, changed = true;
  while(changed){
    changed = false;
    lastCase = undefined;
    ans = [];
    arr.forEach(n =>{
      if(n % 2 === lastCase){
        ans[ans.length - 1] += n;
        changed = true;
      }else{
        lastCase = n % 2;
        ans.push(n)
      }
    })
    arr = ans;
  }
  return ans.length;
}