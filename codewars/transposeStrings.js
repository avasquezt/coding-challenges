/**
 * Transposes the strings in the input array
 * @param {string[]} array 
 * @returns {string}
 */
function transposeTwoStrings (array) {
    const n = array.reduce((max, e) => Math.max(max, e.length), 0);
    let ans = [];
    for(let i = 0; i < n; i++){
      const curr = array.map(e => e[i] || ' ');
      ans.push(curr.join(' '));
    }
      return ans.join('\n');
  }