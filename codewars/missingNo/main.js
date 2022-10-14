function missingNo(nums) {
  return 5050 - nums.reduce((acc, n) => acc + n, 0);
}