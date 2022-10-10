function maxMin(arr1,arr2){
    let diff = arr1.map((n, i) => Math.abs(n - arr2[i]));
    return [Math.max(...diff), Math.min(...diff)];
  }