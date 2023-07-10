/**
 * Encodes the input number in 'Pits' and 'lands' of the surface of a CD that represent binary data
 * @param {number} n 
 * @returns {string}
 */
function encodeCD(n) {
    let result = 'P';
    const changes = {P:'L', L:'P'};
    let lastChar = 'P';
    while(n > 0){
        result += n % 2 ? changes[lastChar] : lastChar;
        n = Math.floor(n / 2);
        lastChar = result[result.length - 1];
    }
    return result.padEnd(9, lastChar);
}