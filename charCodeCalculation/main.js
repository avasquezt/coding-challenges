function calc(x){
  let ans = x.split('').reduce((acc, n) => [acc[0] + n.charCodeAt(0), acc[1] + String(n.charCodeAt(0)).replace(/7/g, '1')], ['', '']);
  ans = ans.map(n => n.split('').reduce((acc,m) => acc + +m, 0));
  return ans[0] - ans [1];
}