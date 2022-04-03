const pipeFix = numbers => Array.from({ length: Math.max(...numbers) - Math.min(...numbers) + 1 }, (_, i) => Math.min(...numbers) + i);
  

console.log(pipeFix([1,2,3,5,6,8,9]));
console.log(pipeFix([-1,4]));

// let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);