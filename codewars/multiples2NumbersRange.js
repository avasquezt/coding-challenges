/**
 * Returns the multiples of the requested numbers in the input range
 * @param {number} s1 
 * @param {number} s2 
 * @param {number} s3 
 * @returns {number}
 */
function multiples(s1,s2,s3){
    return Array(s3-1).fill(0).reduce((r, _, i) => (i + 1) % s1 == 0 && (i + 1) % s2 == 0 ? r.concat(i + 1) : r, []);
}