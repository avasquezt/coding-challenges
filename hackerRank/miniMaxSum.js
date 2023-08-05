/**
 * Calculates the minimum and maximum sums of the input array excluding one element
 * @param {number[]} arr 
 */
function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    for(const n of arr){
        sum += n;
        min = Math.min(min, n);
        max = Math.max(max, n);
    }
    console.log(`${sum - max} ${sum - min}`);

}