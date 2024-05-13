/**
 * Returns an array with all possible rotations of the input string
 * @param {string} text 
 * @param {string[]} t 
 * @returns 
 */
function scrollingText(text, t = text.toUpperCase()){
    const ans = [];
    for(let i = 0; i < text.length; i++){
      ans.push(t.slice(i) + t.slice(0,i));
    }
    return ans;
}