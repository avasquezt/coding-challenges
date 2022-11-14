function solution(a) {
    for(let i = 0, currPos = 0; i < a.length; i++){
      currPos += a[currPos];
      if(currPos < 0 || currPos >= a.length){
        return (i + 1);
      }
    }
    return -1;
  }