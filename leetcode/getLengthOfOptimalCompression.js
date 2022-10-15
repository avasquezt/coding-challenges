/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLengthOfOptimalCompression = function(s, k) {
    console.log(s.replace(/(.)\1+/g, char => char[0] + char.length));
    function dp(i, prev, prevCount, k){
        // # set it to inf as we will take the min later
        if (k < 0) return Infinity;
        // # we delete all characters, return 0
        if (i === s.length) return 0;
        // # here we can have two choices, we either
        // # 1. delete the current char
        // # 2. keep the current char
        // # we calculate both result and take the min one
        let keep, del = dp(i + 1, prev, prevCount, k - 1);
        if (s[i] === prev){
            // # e.g. a2 -> a3
            keep = dp(i + 1, prev, prevCount + 1, k);
            // # add an extra 1 for the following cases
            // # since the length of RLE will be changed
            // # e.g. prev_cnt = 1: a -> a2
            // # e.g. prev_cnt = 9: a9 -> a10
            // # e.g. prev_cnt = 99: a99 -> a100 
            // # otherwise the length of RLE will not be changed
            // # e.g. prev_cnt = 3: a3 -> a4
            // # e.g. prev_cnt = 8: a8 -> a9
            // # alternative you can calculate `RLE(prev_cnt + 1) - RLE(cnt)`
            if ([1,9,99].includes(prevCount)){
                keep += 1;
            }
        }else{
            // # e.g. a
            keep = dp(i + 1, s[i], 1, k) + 1;
        }
        return Math.min(keep, del);
    }
    // # dp(i, prev, prev_cnt, k) returns the length of RLE with k characters to be deleted
    // # starting from index i 
    // # with previous character `prev`
    // # with `prev_cnt` times repeated so far
    return dp(0, '', 0, k);
};


getLengthOfOptimalCompression = function(s, k) {
    let n = s.length;

    function counts(k, i, j, c){
        if (k < 0) return Infinity;
        if (i >= n) return 0;

        if (0 <= j && s[i] == s[j]){
            return (c == 1 || c == 9 || c == 99) + counts(k, i + 1, i, c + 1);
        }
        return  Math.min(1 + counts(k, i + 1, i, 1), counts(k - 1, i + 1, j, c))
    }
    return counts(k, 0, -1, 0)
}


console.log(getLengthOfOptimalCompression('aabccc', 2));
console.log(getLengthOfOptimalCompression('aaabcccd', 2));
console.log(getLengthOfOptimalCompression('aabbaa', 2));
console.log(getLengthOfOptimalCompression('aaaaaaaaaaa', 0));
console.log(getLengthOfOptimalCompression('aaaaaaaaaac', 1));
console.log(getLengthOfOptimalCompression('abbbaaaaaaaa', 3));
