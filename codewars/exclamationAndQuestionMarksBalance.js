/**
 * Returns a string according to the exclamation and question marks balance of the input strings
 * @param {string} left 
 * @param {string} right 
 * @returns {string}
 */
function balance(left,right){
  let val = {'!': 2, '?':3};
  let [a, b] = [left, right].map(s=>s.split('').reduce((n, i) => n + val[i] || 0, 0));
  //let balance = left.split('').reduce((n, i) => n + val[i] || 0, 0) - right.split('').reduce((n, i) => n + val[i] || 0, 0)
  return  (a - b) == 0 ? 'Balance' : (a - b) < 0 ? 'Right' : 'Left';
}