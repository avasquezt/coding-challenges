/**
 * Calculates the rounded square root of the input number
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0) return x;
    let left = 1;
    let right = x;
    while(left <= right){
        const mid = left + Math.trunc((right - left) / 2);
        if(mid <= x / mid && (mid + 1) > x / (mid + 1)){
            return mid;
        }else if(mid < x / mid){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
};