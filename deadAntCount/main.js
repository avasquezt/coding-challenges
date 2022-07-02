deadAntCount = function(ants) {
  if (!ants){
    return 0;
  }
  ants = ants.split('ant').join('').split('');
  let ans = {a:0, n:0, t:0};
  ants.forEach(char => char in ans ? ans[char] += 1 : null);
  return Math.max(...Object.values(ans));
}