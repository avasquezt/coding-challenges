/**
 * Returns a string with the most repeated characters and their location 
 * @param {string} s1 
 * @param {string} s2 
 * @returns {string}
 */
function mix(s1, s2) {
    const occurrencesS1 = {};
    const occurrencesS2 = {};
    let maxOcurrences = {};
    
    for(const char of s1){
      occurrencesS1[char] = 1 + (occurrencesS1[char] || 0);
      maxOcurrences[char] = ['1', occurrencesS1[char]];
    }
    
    for(const char of s2){
      occurrencesS2[char] = 1 + (occurrencesS2[char] || 0);
      if(char in maxOcurrences){
        if(occurrencesS2[char] > maxOcurrences[char][1]){
          maxOcurrences[char] = ['2', occurrencesS2[char]];  
        }else if(occurrencesS2[char] == maxOcurrences[char][1]){
          maxOcurrences[char] = ['=', occurrencesS2[char]];
        }
      }else{
         maxOcurrences[char] = ['2', occurrencesS2[char]];
      }
    }
    
    maxOcurrences = Object.entries(maxOcurrences).filter(e => /[a-z]/.test(e[0]) && e[1][1] > 1);
    maxOcurrences = maxOcurrences.sort((a, b) => (b[1][1] - a[1][1]) || (a[1][0].charCodeAt(0) - b[1][0].charCodeAt(0)) || (a[0].charCodeAt(0) - b[0].charCodeAt(0)));
    return maxOcurrences.map(e => `${e[1][0]}:${e[0].repeat(e[1][1])}`).join('/');
  }