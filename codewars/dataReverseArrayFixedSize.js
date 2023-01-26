/**
 * Reverses the input array in parts of 8 elements each
 * @param {number[]} data 
 * @returns {number[]}
 */

function dataReverse(data) {
    const arr = [];
    for(let i = data.length - 8; i >= 0; i -= 8){
      arr.push(...data.slice(i, i + 8));
    }
    return arr;
}