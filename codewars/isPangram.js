function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let ocurrences = {};
    let total = 0;
    for(const char of string.toLowerCase()){
      if(!ocurrences[char] && alphabet.includes(char)){
        total++;
        ocurrences[char] = true;
        if(total == 26){
          return true
        }
      }
    }
    return false;
  }