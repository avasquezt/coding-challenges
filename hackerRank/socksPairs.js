/**
 * Calculates the number of same color pairs of socks in the input array
 * @param {number} n 
 * @param {number[]} ar 
 * @returns {number}
 */
function sockMerchant(n, ar) {
    // Write your code here
    let singles = new Set();
    let pairs = 0;
    for(const n of ar){
        if(singles.has(n)){
            pairs++;
            singles.delete(n);
        }else{
            singles.add(n);
        }
    }
    return pairs;
}