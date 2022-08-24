function fifo(n, referenceList) {
	let ans = Array(n).fill(-1), currPos=0;
  referenceList.forEach((e, i) =>{
    if (!ans.includes(e)){
      ans[currPos % n] = e;
      currPos++;
    }
  })
  return ans;
}