/**
 * Checks if all occurrences of a given letter are always immediately followed by the other given letter
 * @param {string} txt 
 * @param {string} a 
 * @param {string} b 
 * @returns {boolean}
 */
function bestFriend(txt, a, b) {
    const matches = txt.match(new RegExp(a + '\\w?', 'gi')) || [];
    return matches.length == 0 || (a == b ? false : matches.every(e => new RegExp(a + b).test(e)));
}

function bestFriend(txt, a, b) {
    for(let i = 0; i < txt.length; i++){
      if(txt[i] === a && txt[i + 1] !== b) return false 
    }
    return true
}