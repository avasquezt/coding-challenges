/**
 * Returns all possible valid IP addresses that can be formed with the input digit string
 * @param {string} s 
 * @returns {string[]}
 */

var restoreIpAddresses = function(s) {
    function isValid(s){
        return (0 <= Number(s) && Number(s) <= 255) && s == String(Number(s));
    }
    const n = s.length;
    const res = [];
    for(let i = 1; i <= 4; i++){
        for(let j = i + 1; j <= i + 4; j++){
            for(let k = j + 1; k <= j + 4; k++){
                if(k < n){
                    const s1 = s.slice(0,i);
                    const s2 = s.slice(i, j);
                    const s3 = s.slice(j, k);
                    const s4 = s.slice(k);
                    if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){
                        res.push([s1,s2,s3,s4].join('.'));
                    }
                }
            }
        }
    }
    return res;
};


console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));