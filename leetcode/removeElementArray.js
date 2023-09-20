/**
 * Removes the requested value from the input array in place
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let currIndex = 0;
    let next = nums.length - 1;
    while(currIndex <= next){
        if(nums[currIndex] == val){
            while(nums[next] == val && next > currIndex) next--;
            [nums[currIndex], nums[next]] = [nums[next], nums[currIndex]];
            next--;
        }
        currIndex++;
    }
    return next + 1;
};

var removeElement = function(nums, val) {
    let currIndex = 0;
    let next = 0;
    while(currIndex < nums.length){
        if(nums[currIndex] != val){
            [nums[currIndex], nums[next]] = [nums[next], nums[currIndex]];
            next++;
        }
        currIndex++;
    }
    return next;
};