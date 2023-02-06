/**
 * Shuffles the elements in the input array by the requested number
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const ans = [];
    for(let i = 0; i - n; i++){
        ans.push(nums[i], nums[i + n]);
    }
    return ans;
};

console.log(shuffle([2,5,1,3,4,7], 3));
console.log(shuffle([1,2,3,4,4,3,2,1], 4));
console.log(shuffle([1,1,2,2], 2));