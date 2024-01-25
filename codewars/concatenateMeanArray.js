/**
 * Calculates the mean of the numbers and concatenates the letters in the input array
 * @param {string[]} lst 
 * @returns {[]}
 */
function mean(lst){
    let r = ['', 0, 0];
    lst.forEach(c => {
      if(/[a-z]/.test(c)){
        r[0] += c;
      }else{
        r[1] += +c;
        r[2]++;
      }
    })
    return [r[1]/r[2], r[0]];
}

function mean(lst){
    return lst.reduce((r, c) => isNaN(c) ? [r[0], r[1] += c] : [(r[0] * 10 + +c) / 10, r[1]], [0, '']);
}