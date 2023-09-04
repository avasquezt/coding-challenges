/**
 * Duplicates the zeroes in the input array
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(a) {
    let count = 0;
    let n = a.length;
    
    for (const n of a) if(n == 0) count++;
    
    for(let i = n - 1, write = n + count - 1; i >= 0 && write >= 0; i--, write--){
        if(write < n) a[write] = a[i];
        if(a[i] == 0){
            write--;
            if (write < n) a[write] = a[i];
        }
    }
};