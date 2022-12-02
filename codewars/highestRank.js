function highestRank(arr){
    let ocurrences = {};
    let max = arr[0];
    for(const n of arr){
      ocurrences[n] = 1 + (ocurrences[n] || 0);
      if(ocurrences[n] > ocurrences[max]){
        max = n;
      }else if(ocurrences[n] == ocurrences[max] && n > max){
        max = n;
      }
    }
    return max;
}