/**
 * Finds first occurrence index of the requested string in the input string
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };

var strStr = function(haystack, needle) {

    if (needle.length > haystack.length) return -1;

    for(let i = 0; i < haystack.length; i++){
        if(haystack.slice(i, i + needle.length) == needle){
            return i;
        }
    }
    return -1;
    
};