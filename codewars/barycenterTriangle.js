/**
 * Calculates the barycenter of the input triangle
 * @param {number[]} p1 
 * @param {number[]} p2 
 * @param {number[]} p3 
 * @returns {number}
 */
function barTriang(p1, p2, p3){
    function calc(arr){
      return arr.reduce((acc, n) => acc + n, 0) / (arr.length || 1);
    }
    return [calc([p1[0], p2[0], p3[0]]), calc([p1[1], p2[1], p3[1]])].map(n => +n.toFixed(4));
}