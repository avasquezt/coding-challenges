
/**
 * Returns the lowest index where the requested value can be inserted in the input array keeping it sorted
 * @param {number[]} ary 
 * @param {number} val 
 * @returns {number}
 */

function keepOrder(ary, val) {
    let ans = 0;
    while(ary[ans] < val){
      ans++;
    }
    return ans;
}