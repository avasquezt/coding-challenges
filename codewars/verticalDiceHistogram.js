/**
 * Returns a string representing a histogram of the input dice value frequencies
 * @param {number[]} results 
 * @returns {string}
 */
var histogram = function(results) {
    let ans = '-----------\n1 2 3 4 5 6\n';
    let max = Math.max(...results);
    if (max == 0) return ans;
    for(let i = 0; i <= max; i++){
      let row = '';
      for(let j = 0; j < 6; j++){
        row = row + (results[j]-- > 0 ? '# ' : (results[j] == -1 && i > 0 ? i + ' ' : '  '));
      }
      row = row.trimEnd();
      ans = row + '\n' + ans;
    }
    return ans;
}