/**
 * Calculates the number of files in the input queue that fit in a Hard Disk Drive with the given capacity
 * @param {number[]} sizes 
 * @param {number} hd 
 * @returns {number}
 */
function save(sizes, hd) {
    for(let i = 0; i <= sizes.length; i++){
      hd -= sizes[i];
      if(hd < 0) return i;
      if(hd == 0) return i + 1;
    }
    return sizes.length;
}