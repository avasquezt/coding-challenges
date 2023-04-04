/**
 * Calculates the minimum number of substrings in the input string, such that the characters in each substring are unique
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let curr = new Set();
    let count = 0;
    for(const char of s){
        if(curr.has(char)){
            curr = new Set(char);
            count++;
        }else{
            curr.add(char);
        }
    }
    if(curr.size) count++;
    return count;
};