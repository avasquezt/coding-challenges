/**
 * Returns the word with the longest length in the input string
 * @param {string} stringOfWords 
 * @returns {string}
 */
function longestWord(stringOfWords){
    let currWord = '';
    let maxStr = '';
    for(const char of stringOfWords){
      if(char != ' '){
        currWord += char;
      }else{
        if (currWord.length >= maxStr.length){
          maxStr = currWord;
        }
        currWord = '';
      }
    }
    return maxStr.length > currWord.length ? maxStr : currWord;
}

let longestWord = s => s.split(' ').reduceRight((a,b)=>(b.length>a.length) ? b : a);