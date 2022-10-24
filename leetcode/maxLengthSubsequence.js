/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    let sunsequences = [''];
    let max = 0;
    for(let text of arr){
        for(let e of sunsequences){
            if(text.split('').every((char, i) => !e.includes(char) && text.lastIndexOf(char) == i)){
                sunsequences.push(e + text);
                max = Math.max(max, (e + text).length);
            }
        }
    }
    return max;
    
};