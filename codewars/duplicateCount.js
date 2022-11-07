function duplicateCount(text){
    let ocurrences = {};
    let duplicates = 0;
    for(let char of text.toLowerCase()){
      ocurrences[char] = 1 + (ocurrences[char] || 0);
      if(ocurrences[char] == 2) duplicates++;
    }
    return duplicates;
  }