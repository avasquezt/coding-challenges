function duplicateEncode(word, lowerCaseWord = word.toLowerCase()){
    return lowerCaseWord.replace(/./g, char => lowerCaseWord.indexOf(char) == lowerCaseWord.lastIndexOf(char) ? '(' : ')');
  }