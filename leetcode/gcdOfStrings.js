/**
 * Returns the largest string x such that x divides both input strings
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let min;
    if(str1.length < str2.length){
        min = str1;
    }else{
        min = str2;
    }

    for(let i = min.length; i; i--){
        const prefix = min.slice(0,i);
        if(isValid(str1, prefix) && isValid(str2, prefix)){
            return prefix;
        }
    }
    return '';

    function isValid(str1, str2){
        const size = str1.length / str2.length;
        if(Number.isInteger(size)){
            return str2.repeat(size) === str1;
        }
        return false;
    }
};

console.log(gcdOfStrings("ABCABC","ABC"));
console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX","TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"));