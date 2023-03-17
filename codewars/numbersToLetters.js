/**
 * Maps the input array of indexes of the alphabet to a string
 * @param {number[]} x 
 * @returns {string}
 */
function switcher(x){
    const letters = 'zyxwvutsrqponmlkjihgfedcba!? ';
    return x.map(n => letters[n-1]).join('');
}