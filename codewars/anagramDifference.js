/**
 * Calculates how many letters have to be removed from the input strings to make them anagrams
 * @param {string} w1 
 * @param {string} w2 
 * @returns {number}
 */
function anagramDifference(w1,w2){
    let i, j;
    let count = 0;
    w1 = w1.split('').sort().join('');
    w2 = w2.split('').sort().join('');
    for(i = 0, j = 0; i < w1.length && j < w2.length;){
      const a = w1.at(i);
      const b = w2.at(j);
      if(a != b){
        count++;
        if(a.charCodeAt(0) < b.charCodeAt(0)){
          i++;
        }else{
          j++;
        }
      }else{
        i++;
        j++;
      }
    }
    return count + w1.length - i + w2.length - j;
}
  