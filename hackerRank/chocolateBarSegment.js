/**
 * Calculates the number of segments in the input array that add up the requested total
 * @param {number[]} s 
 * @param {number} d 
 * @param {number} m 
 * @returns 
 */
function birthday(s, d, m) {
    let ans = 0;
    // for(let i = 0, j = 0; i <= s.length - m; i++, j = 0){
    //     let curr = 0;
    //     while(j < m){
    //         curr += s[i + j];
    //         j++;
    //     }
    //     if(curr == d){
    //         ans++;
    //     }
    // }
    let sum = 0;
    for(let i = 0; i < m - 1; i++){
        sum += s[i];
    }
    console.log(sum);
    for(let i = m - 1; i < s.length; i++){
        sum += s[i];
        if(sum == d) ans++;
        sum -= s[i - m + 1] || 0;
    }
    return ans;
}