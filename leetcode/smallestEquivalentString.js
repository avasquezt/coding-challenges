/**
 * Finds the smallest equivalent string, according to the equivalences given
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {

    const chars = Array.from(Array(26), (_, i) => i);
    const aIndex = 'a'.charCodeAt(0);

    for(let i = 0; i < s1.length; i++){
        const a = s1[i].charCodeAt(0) - aIndex, b = s2[i].charCodeAt(0) - aIndex;
        const pa = find(a), pb = find(b);
        const min = Math.min(pa, pb);
        chars[pa] = min;
        chars[pb] = min;
    }

    let ans = '';
    for(const char of baseStr){
        ans += String.fromCharCode(find(char.charCodeAt(0) - aIndex) + aIndex);
    }
    
    return ans;

    function find(e){
        let res = chars[e];
        if(res != e){
            res = find(res)
        }
        return res;
    }

};