/**
 * Calculates the length of the longest vowel substring in the input text
 * @param {string} s 
 * @returns {number}
 */
function solve(s){
    let tmp = 0;
    let count = 0;
   for(const char of s)
     if('aeiou'.includes(char)){
       tmp++;
     }else{
       count = Math.max(count, tmp);
       tmp = 0;
     }
    return Math.max(count, tmp);
}