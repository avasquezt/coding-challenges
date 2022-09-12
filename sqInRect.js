function sqInRect(lng, wdth){
    if (lng == wdth) return null;
    let ans = [];
    while(lng != 0 && wdth != 0){
      let sqr = Math.min(lng, wdth);
      ans.push(sqr);
      [lng, wdth] = lng == sqr ? [lng, wdth -sqr] : [lng - sqr, wdth];
    }
    return ans;
  }