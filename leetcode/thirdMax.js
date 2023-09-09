/**
 * Finds the third maximum number in the input array
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let a = -Infinity, b = -Infinity, c = -Infinity;
    for(const n of nums){
        if([a,b,c].includes(n)) continue;
        if(n > c){
            [a,b,c] = [b,c,n];
        }else if(n > b){
            [a,b] = [b,n];
        }else if(n > a){
            c = a;
        }
    }
    return a != -Infinity ? a : c;
};