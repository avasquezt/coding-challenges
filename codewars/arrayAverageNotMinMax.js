/**
 * Calculates the average of the elements in the input array excluding the maximum and minimum values
 * @param {number[]} arr 
 * @returns {number}
 */
function testit(arr){
    arr =  arr.filter(n => n !== Math.min(...arr) && n !== Math.max(...arr));
    return +(arr.reduce((acc, n) => acc + n, 0) / (arr.length || 1)).toFixed(2);
}