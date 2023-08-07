/**
 * Checks if the input string is a pangram
 * @param {string} s 
 * @returns {string}
 */
function pangrams(s) {
    // Write your code here
    let letters = new Set();
    for(const char of s){
        if(/[a-z]/i.test(char)){
            letters.add(char.toLowerCase());
            if(letters.size == 26) return 'pangram';
        }
    }
    return 'not pangram';
}