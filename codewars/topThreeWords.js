/**
 * Finds the top-3 most occurring words in the input string
 * @param {string} text 
 * @returns {string[]}
 */

function topThreeWords(text) {
    const elementCount  = new Map();
    let word = '', n = 0;

    // Count each valid word's occurrences
    for(const char of text){
      if(/[^a-zA-Z']/g.test(char)){
        if(word){
          elementCount.set(word, 1 + ( elementCount.get(word) || 0));
          n = Math.max(n, elementCount.get(word));
        }
        word = '';
      }else{
        word += char.trim().toLowerCase();
      }
    }
    if(word){
      elementCount.set(word, 1 + (elementCount.get(word) || 0));
      n = Math.max(n, elementCount.get(word));
    }
    
    // Save the words in an array by frequency
    const frequency = Array.from(Array(n + 1), _ => []);
    for(const[key, value] of elementCount.entries()){
      if(/\w/.test(key)){
        frequency[value].push(key);
      }
    }
    
    // Get and return the top 3 words by frequency
    const ans = [];
    let count = 0;
    for(let i = frequency.length - 1; i >= 0; i--){
      for(let j = 0; j < frequency[i].length; j++){
        ans.push(frequency[i][j]);
        count++;
        if(count == 3){
          return ans;
        }
      }
    }
    return ans;
  }