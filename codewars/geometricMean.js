function geo_mean(nums, arith_mean) {
    let num = arith_mean * (nums.length + 1);
    num = nums.reduce((acc, n) => acc - n, num);
    return Math.pow(nums.reduce((acc, n) => acc * n, num), 1 / (nums.length + 1)); 
  }