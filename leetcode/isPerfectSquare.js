/**
 * Checks if the input number is a perfect square
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = Math.ceil(num / 2);
    while(left <= right){
        const mid = left + Math.trunc((right - left) / 2);
        if(mid * mid == num) return true;
        if(mid * mid < num) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};