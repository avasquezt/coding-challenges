function decode(r) {
    ans = '';
    let n = Number(r.replace(/[^\d]/g, ''));
    let s = r.replace(/[^a-z]/g, '');
    for(let char of s){
        let m = char.charCodeAt(0) - 97;
        let solutions = [];
        for(let i = 0; i < 26; i++){
            if ( ((n * i) % 26) == m){
                solutions.push( i );
            }
        }
        if (solutions.length != 1) {
            return 'Impossible to decode';
        }
        ans += String.fromCharCode(solutions[0] + 97);
    }
    return ans;
}

console.log(decode('6015ekx'));
console.log(decode('1273409kuqhkoynvvknsdwljantzkpnmfgf'));
console.log(decode('1544749cdcizljymhdmvvypyjamowl'));
console.log(decode('105860ymmgegeeiwaigsqkcaeguicc'));
console.log(decode('1122305vvkhrrcsyfkvejxjfvafzwpsdqgp'));
