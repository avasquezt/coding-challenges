/**
 * Returns a pattern string of stairs with the requested size
 * @param {number} n 
 * @returns {string}
 */
function stairs(n){  
  let left = '', right = '';
  let ans = [];
  for(let i = 1; i <= n; i++){
    left += ' ' + i % 10;
    right = i % 10+ ' ' + right;
    ans.push((left + ' ' + right).trim().padStart(n * 4 - 1, ' '));
  }
  return ans.join('\n');
}