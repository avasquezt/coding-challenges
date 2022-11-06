/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var orderlyQueue = function(s, k) {
    if(k == 1){
        let min = s;
        for(let i = 0; i < s.length; i++){
            s = s.slice(1) + s[0];
            if(s.localeCompare(min) < 0){
                min = s;
            }
        }
        return min;
    }else{
        return s.split('').sort().join('');
    }
};