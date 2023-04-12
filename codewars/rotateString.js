/**
 * Returns an array of strings with each letter from the input string being rotated to the end
 * @param {string} str 
 * @returns {string[]}
 */
function rotate(str){
    const ans = [];
    for(const i in str){
      str = str.slice(1) + str.at(0);
      ans.push(str);
    }
    return ans;
}