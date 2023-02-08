/**
 * Calculates the integer depth of the input number
 * @param {number} x 
 * @returns {number}
 */
function computeDepth (x){
    let i = 1;
    for(let n = new Set(); n.size < 10; i++){
      String(i * x).split('').forEach(char => n.add(char));
    }
    return i - 1;
}