/**
 * Returns a message depending on the input number
 * @param {number} n 
 * @returns {string}
 */
function caffeineBuzz(n){
    let ans = '';
    if(n % 3 == 0 && n % 4 == 0) ans = 'Coffee';
    else if(n % 3 == 0) ans = 'Java';
    if(n % 2 == 0 && ans) ans += 'Script';
    return ans || 'mocha_missing!';
}