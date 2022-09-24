function gimme (triplet, ans = 0) {
    let max = min = ans = 0;
    triplet.forEach((n, i, arr) => {
      if(n > arr[max]){
        ans = max;
        max = i;
      }else if(n < arr[min]){
        ans = min;
        min = i;
      }else{
        ans = i;
      }
    });
    return ans;
  }