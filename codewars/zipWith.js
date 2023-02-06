/**
 * Applies the input function to each pair of elements of the arrays and returns the results
 * @param {Function} fn 
 * @param {number[]} a0 
 * @param {number[]} a1 
 * @returns {number[]}
 */

function zipWith(fn,a0,a1) {
    const ans = [];
    for(let i = 0; i < Math.min(a0.length, a1.length); i++){
      ans.push(fn(a0[i], a1[i]));
    }
    return ans;
}

// const zipWith = (fn,a0,a1) => Array.from(Array(Math.min(a0.length, a1.length)), (_, i) => fn(a0[i], a1[i]));

// const zipWith = (fn,a0,a1) => Array(Math.min(a0.length, a1.length)).fill().map((_, i) => fn(a0[i], a1[i]));
