/**
 * Compares the input strings by their ASCII character codes sum
 * @param {string} s1 
 * @param {string} s2 
 * @returns {boolean}
 */
function compare(s1, s2) {
    function calculateStringValue(string){
      let total = 0;
      for(const e of string){
        total += e.charCodeAt(0);
        if(/[^A-Z]/g.test(e)) return 0;
      }
      return total;
    }
    return calculateStringValue((s1 || '').toUpperCase()) == calculateStringValue((s2 || '').toUpperCase());
}